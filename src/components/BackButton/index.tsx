import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './backButton.module.css';

export const BackButton = () => {
  const history = useHistory();
  const { button } = styles;

  const goBack = () => history.goBack();

  return (
    <button className={button} onClick={goBack}>
      Back
    </button>
  )
}