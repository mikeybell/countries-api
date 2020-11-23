import React from 'react';
import { Card } from './Card';
import { Loader } from '../Loader';
import { useGetAllCountries } from './hooks/useGetAllCountries';
import styles from "./styles/countryList.module.css";

export const CountryList = () => {
  const { countries, error } = useGetAllCountries();
  const { container, list } = styles;

  if (error) {
    return <p>{error}</p>
  }

  if (countries.length === 0) {
    return <Loader />
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