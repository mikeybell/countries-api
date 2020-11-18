import React from 'react';
import { useAllCountries } from './hooks/useAllCountries';
import styles from "./countryList.module.css";

export const CountryList = () => {
  const { countries, error } = useAllCountries();
  const { container } = styles;

  console.log({countries})

  if (error) {
    return <p>{error}</p>
  }

  return (
    <section className={container}>
      <h1>List</h1>

    </section>
  )
}