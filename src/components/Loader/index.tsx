import React, { useContext } from 'react';
import { ThemeContext } from '../App'
import { LoadingIcon } from '../../assets/loading';
import styles from './loader.module.css';

export const Loader = () => {
  const theme = useContext(ThemeContext);
  const iconColor = theme === 'light' ? '#000' : '#FFF';

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <LoadingIcon color={iconColor} />
      </div>
    </div>
  )
}