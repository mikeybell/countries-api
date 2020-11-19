import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as MoonFilled } from '../../assets/moon_filled.svg';

interface Props {
  lightTheme: boolean;
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme, lightTheme }: Props) => {
  const { header, title, content, button, icon } = styles;
  const moon = lightTheme
    ? <Moon className={icon} />
    : <MoonFilled className={icon} />

  return (
    <header className={header}>
      <div className={content}>
        <Link to='/'>
          <h1 className={title}>Where in the world?</h1>
        </Link>
        <button className={button} onClick={toggleTheme}>
          {moon}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
