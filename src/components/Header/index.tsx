import React from 'react';
import styles from './header.module.css';

export const Header = ({ toggleTheme }: any) => {
  const { header, title, content, button } = styles;

  return (
    <header className={header}>
      <div className={content}>
        <h1 className={title}>Where in the world?</h1>
        <button className={button} onClick={toggleTheme}>
          Dark Mode
        </button>
      </div>
    </header>
  );
}
