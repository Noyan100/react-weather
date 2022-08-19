import React from 'react';
import styles from './Item.module.scss';

type TItem = {
  day: string;
  date: string;
  icon: string;
  temperatureDay: string;
  temperatureNight: string;
  info: string;
};

const Item: React.FC<TItem> = ({ day, date, icon, temperatureDay, temperatureNight, info }) => {
  return (
    <div className={styles.item}>
      <div className={styles.day}>{day}</div>
      <div className={styles.date}>{date}</div>
      <div className={styles.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.temperatureDay}>{temperatureDay}</div>
      <div className={styles.temperatureNight}>{temperatureNight}</div>
      <div className={styles.info}>{info}</div>
    </div>
  );
};

export default Item;
