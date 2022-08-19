import React from 'react';
import styles from './TodayInfo.module.scss';
import temperature from '../../assets/temperature.svg';
import pressure from '../../assets/pressure.svg';
import precipitation from '../../assets/precipitation.svg';
import wind from '../../assets/wind.svg';

type TTodayInfo = {};

const items = [
  { title: 'Температура', icon: temperature, info: '20° - ощущается как 17°' },
  { title: 'Давление', icon: pressure, info: '765 мм ртутного столба - нормальное' },
  { title: 'Осадки', icon: precipitation, info: 'Без осадков' },
  { title: 'Ветер', icon: wind, info: '3 м/с юго-запад - легкий ветер' },
];

const TodayInfo: React.FC<TTodayInfo> = ({}) => {
  return (
    <div className={styles.container}>
      {items.map((obj, index) => (
        <div className={styles.wrapper} key={index}>
          <div className={styles.icon}>
            <img src={obj.icon} alt="" />
          </div>
          <div className={styles.title}>{obj.title}</div>
          <div className={styles.info}>{obj.info}</div>
        </div>
      ))}
    </div>
  );
};

export default TodayInfo;
