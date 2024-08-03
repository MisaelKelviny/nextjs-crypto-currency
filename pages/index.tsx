import type { NextPage } from "next";
import { useState } from "react";
import CoinList from "../components/CoinList";
import { Layout } from "../components/Layout";
import SearchBar from "../components/SearchBar";

interface HomeProps {
  filteredCoins?: any;
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins,
    },
  };
};

const Home: NextPage<HomeProps> = ({ filteredCoins }) => {
  const [search, setSearch] = useState("");

  const allCoins = filteredCoins.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChanges = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChanges} />
        <CoinList filteredCoin={allCoins} />
      </div>
    </Layout>
  );
};

export default Home;
