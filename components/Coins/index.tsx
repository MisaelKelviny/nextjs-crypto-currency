import Image from 'next/image';
import Link from 'next/link';
import styles from './Coins.module.css';

interface CoinProp {
  name: string,
  price: number,
  symbol: string,
  marketcap: number,
  volume: string,
  image: string,
  priceChange: string,
  id: any
}

const Coins = (props: CoinProp) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${props.id}`} passHref>
      <div className={styles.coin_container}>
        <div className={styles.coin_row}>
          <div className={styles.coin}>
            <Image src={props.image} alt={props.name} width={30} height={30} />
            <h1 className={styles.coin_h1}>{props.name}</h1>
            <p className={styles.coin_symbol}>{props.symbol}</p>
          </div>
          <div className={styles.coin_data}>
            <p className={styles.coin_price}>${props.price}</p>
            <p className={styles.coin_volume}>${props.volume.toLocaleString()}</p>
            {props.priceChange < 0 ? (
              <p className={styles.coin_percent, styles.red}>{props.priceChange.toFixed(2)}%</p>
            ) : (
              <p className={styles.coin_percent, styles.green}>{props.priceChange.toFixed(2)}%</p>
            )}
            <p className={styles.marketcap}>Mkt cap: ${props.marketcap.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coins;
