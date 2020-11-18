import React, { useState } from 'react';
import '../styles/app.css';
import '../styles/theme.css';

export const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`app ${theme}`}>
      <h1>Hello world</h1>
    </div>
  );
}
