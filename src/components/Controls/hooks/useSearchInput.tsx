import { useState, useEffect, ChangeEvent } from 'react';
// import styles from '../styles/searchInput.module.css';
import { Country } from '../../types';

interface Props {
  countries: Country[];
  setCountriesList: (list: Country[]) => void;
}

export const useSearchInput = ({ countries, setCountriesList }: Props) => {
  const [search, setSearch] = useState<string>('');

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

  return { handleSearchInput };
}
