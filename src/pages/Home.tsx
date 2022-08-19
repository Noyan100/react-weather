import React from 'react';
import Header from '../components/Header/Header';
import Tab from '../components/Tab/Tab';
import Today from '../components/Today/Today';
import TodayInfo from '../components/TodayInfo/TodayInfo';
import styles from './Home.module.scss';

type THome = {};

const Home: React.FC<THome> = ({}) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Today />
        <TodayInfo />
      </div>
      <Tab />
    </div>
  );
};

export default Home;
