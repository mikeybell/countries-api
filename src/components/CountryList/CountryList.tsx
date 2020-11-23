import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { Loader } from '../Loader';
import { useGetAllCountries } from './hooks/useGetAllCountries';
import { useFilterRegion } from './hooks/useFilterRegion';
import { Country } from '../types';
import styles from "./styles/countryList.module.css";

export const CountryList = () => {
  const [ countriesList, setCountriesList ] = useState<Country[]>([]);
  const { countries, error } = useGetAllCountries();
  const [ region, FilterRegion ] = useFilterRegion();
  const { container, list } = styles;

  useEffect(() => {
    if (countries) setCountriesList(countries);
  }, [countries]);

  useEffect(() => {
    const filteredCountries = countries.filter(country => {
      if (region === 'All') return true;
      return country.region === region;
    });
    setCountriesList(filteredCountries);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  if (error) {
    return <p>{error}</p>
  }

  if (countries.length === 0) {
    return <Loader />
  }

  return (
    <section className={container}>
      <FilterRegion />
      <ul className={list}>
        {countriesList.map(country => {
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