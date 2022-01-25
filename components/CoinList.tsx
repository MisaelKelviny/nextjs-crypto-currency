import Coins from "./Coins"

interface CoinListProps {
  filteredCoin?: any
}

export default function CoinList(props: CoinListProps) {
  return (
    <>
      {props.filteredCoin?.map((coin: any) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        )
      })}
    </>
  )
}