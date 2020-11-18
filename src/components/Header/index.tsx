import React from 'react';
import styles from './header.module.css';
import { ReactComponent as Moon } from '../../assets/moon.svg';
import { ReactComponent as MoonFilled } from '../../assets/moon_filled.svg';

export const Header = ({ toggleTheme, lightTheme }: any) => {
  const { header, title, content, button, icon } = styles;
  const moon = lightTheme
    ? <Moon className={icon} />
    : <MoonFilled className={icon} />

  return (
    <header className={header}>
      <div className={content}>
        <h1 className={title}>Where in the world?</h1>
        <button className={button} onClick={toggleTheme}>
          {moon}
          Dark Mode
        </button>
      </div>
    </header>
  );
}
