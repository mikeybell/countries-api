import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from '../Header';
import { CountryList } from '../CountryList';
import { CountryDetail } from '../CountryDetail';
import styles from './app.module.css';
import '../../styles/theme.css';

export const App = () => {
  const { app, container } = styles;
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => setLightTheme(!lightTheme);

  const themeStyle = lightTheme ? 'light' : 'dark';

  return (
    <Router>
      <main className={`${app} ${themeStyle}`}>
        <Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
        <section className={container}>
          <Switch>
            <Route exact path="/" component={CountryList} />
            <Route exact path="/:slug" component={CountryDetail} />
          </Switch>
        </section>
      </main>
    </Router>
  );
}
