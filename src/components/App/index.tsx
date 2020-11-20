import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from '../Header';
import { CountryList } from '../CountryList';
import { CountryDetail } from '../CountryDetail';
import styles from './app.module.css';
import '../../styles/theme.css';

export const ThemeContext = createContext("");

export const App = () => {
  const { app, container } = styles;
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  };

  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <main className={`${app} ${theme}`}>
          <Header toggleTheme={toggleTheme} />
          <section className={container}>
            <Switch>
              <Route exact path="/" component={CountryList} />
              <Route exact path="/:slug" component={CountryDetail} />
            </Switch>
          </section>
        </main>
      </ThemeContext.Provider>
    </Router>
  );
}
