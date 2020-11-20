import React from 'react';
import { Card } from '../Card';
import { useGetAllCountries } from './hooks/useGetAllCountries';
import styles from "./countryList.module.css";

export const CountryList = () => {
  const { countries, error } = useGetAllCountries();
  const { container, list } = styles;

  if (error) {
    return <p>{error}</p>
  }

  return (
    <section className={container}>
      <ul className={list}>
        {countries.map(country => {
          return (
            <li key={country.name}>
              <Card
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}