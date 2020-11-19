import React from 'react';
import { Card } from '../Card';
import { useAllCountries } from './hooks/useAllCountries';
import styles from "./countryList.module.css";

export const CountryList = () => {
  const { countries, error } = useAllCountries();
  const { container, list, listItem } = styles;

  console.log({countries})

  if (error) {
    return <p>{error}</p>
  }

  return (
    <section className={container}>
      <ul className={list}>
        {countries.map(country => {
          return (
            <li className={listItem} key={country.name}>
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