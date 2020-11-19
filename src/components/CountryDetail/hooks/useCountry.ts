import { useState, useEffect, useCallback } from 'react';
import { Country } from '../../types';

interface CountryResult {
  error: string;
  country?: Country;
}

export const useCountry = (slug: string): CountryResult => {
  const [country, setCountry] = useState();
  const [error, setError] = useState("");
  const countryName = slug.replaceAll('-', ' ');

  const getCountry= useCallback(async () => {
    try {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCountry(data[0]);
    } catch (err) {
      setError(err.message);
    }
  }, [countryName])

  useEffect(() => {
    getCountry();
  }, [getCountry]);

  return { country, error };
}