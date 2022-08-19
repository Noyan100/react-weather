import React from 'react';
import Select from 'react-select';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import switchIcon from '../../assets/switch.svg';
import { useTheme } from '../../hooks/use-theme';

type THeader = {};

const options = [
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Москва', label: 'Москва' },
  { value: 'Минусинск', label: 'Минусинск' },
];

const customStyles = {
  control: () => ({
    fontSize: '16px',
    fontWeight: '500',
    color: '#000',
    backgroundColor: '#4793ff33',
    padding: '1px 5px 2px',
    border: 'none',
    borderRadius: '10px',
    width: '194px',
    display: 'flex',
  }),
};

const Header: React.FC<THeader> = ({}) => {
  const { theme, setTheme } = useTheme();
  const handleThemeClick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.logoImg}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.logoText}>React weather</div>
      </div>
      <div className={styles.choose}>
        <div className={styles.chooseTheme} onClick={handleThemeClick}>
          <img src={switchIcon} alt="" />
        </div>
        <Select options={options} styles={customStyles} />
      </div>
    </div>
  );
};

export default Header;
