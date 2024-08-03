import { NextPage } from "next";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import styles from "./Coin.module.css";

interface CoinProps {
  coin?: any;
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}

const Coin: NextPage<CoinProps> = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <Image
            src={coin.image.large}
            alt={coin.name}
            width={200}
            height={200}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>
            ${coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;
