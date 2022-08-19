import React from 'react';
import styles from './Tab.module.scss';
import cloudy from '../../assets/mainly-cloudy.svg';
import Item from './Item/Item';

type TTab = {};

const items = [
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
  {
    day: 'Сегодня',
    date: '28 авг',
    icon: cloudy,
    temperatureDay: '+18°',
    temperatureNight: '+15°',
    info: 'Безоблачно',
  },
];

const Tab: React.FC<TTab> = ({}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.tab}>
        <li className={styles.tabItemActive}>На неделю</li>
        <li className={styles.tabItem}>На месяц</li>
        <li className={styles.tabItem}>На 10 дней</li>
        <li className={styles.tabItem}>Отменить</li>
      </ul>
      <div className={styles.items}>
        {items.map((obj, index) => (
          <Item {...{ ...obj }} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Tab;
