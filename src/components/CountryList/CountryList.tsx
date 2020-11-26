import React, { useEffect, useState, ChangeEvent } from 'react';
import { Card } from './Card';
import { Loader } from '../Loader';
import { useGetAllCountries } from './hooks/useGetAllCountries';
import { useFilterRegion } from '../Controls/hooks/useFilterRegion';
import { SearchInput } from '../Controls/SearchInput';
import { Country } from '../types';
import styles from "./styles/countryList.module.css";

export const CountryList = () => {
  const [ countriesList, setCountriesList ] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>('');

  const { countries, error } = useGetAllCountries();
  const { FilterRegion } = useFilterRegion({ countries, setCountriesList });

  const { container, list, controls } = styles;

  useEffect(() => {
    if (countries) setCountriesList(countries);
  }, [countries]);

  useEffect(() => {
    if (search !== '') {
      const result = countries.filter(country => {
        return country.name.toLowerCase().includes(search.toLocaleLowerCase());
      });
      setCountriesList(result);
    };

    if (search === '') setCountriesList(countries);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  };

  if (error) {
    return <p>{error}</p>
  }

  if (countries.length === 0) {
    return <Loader />
  }

  return (
    <div className={container}>
      <section className={controls}>
        <SearchInput onChange={handleSearchInput} />
        <FilterRegion />
      </section>
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
    </div>
  )
}