import React, { useState } from 'react';
import { Header } from '../Header';
import { CountryList } from '../CountryList';
import styles from './app.module.css';
import '../../styles/theme.css';

export const App = () => {
  const { app } = styles;
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => setLightTheme(!lightTheme);

  const themeStyle = lightTheme ? 'light' : 'dark';

  return (
    <main className={`${app} ${themeStyle}`}>
      <Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
      <CountryList />
    </main>
  );
}
