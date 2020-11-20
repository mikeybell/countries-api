import React from 'react';
import { Link } from 'react-router-dom';
import styles from './borderButton.module.css';
import { Country } from '../types';

interface Props {
  country: Country;
};

export const BorderButton = ({ country }: Props) => {
  const { button } = styles;
  const slug = country.name.replaceAll(" ", "-");

  return (
    <Link className={button} to={slug}>
      {country.name}
    </Link>
  )
}