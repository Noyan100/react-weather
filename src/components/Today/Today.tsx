import React from 'react';
import styles from './Today.module.scss';
import sun from '../../assets/sun.svg';

type TToday = {};

const url =
  'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=670678e438297434cd3e1258af43ecd2';

const Today: React.FC<TToday> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.blockOne}>
        <div className={styles.textBlock}>
          <span className={styles.temperature}>20°</span>
          <span className={styles.today}>Сегодня</span>
        </div>
        <div className={styles.img}>
          <img src={sun} alt="" />
        </div>
      </div>
      <div className={styles.blockTwo}>
        <span className={styles.time}>Время: 21:54</span>
        <span className={styles.location}>Город: Санкт-Петербург</span>
      </div>
    </div>
  );
};

export default Today;
