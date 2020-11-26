import { useState, useEffect, useCallback } from 'react';
import { Country } from '../../types';

interface CountryResult {
  error: string;
  borderCountries: Country[];
}

export const useGetBorderCountries = (country: Country): CountryResult => {
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>("");

  const getCountry= useCallback(async (countryCode) => {
    try {
      const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setBorderCountries(borderCountries => [...borderCountries, data]);
      return data;
    } catch (err) {
      setError(err.message);
    }
  }, [])

  useEffect(() => {
    if (country && country.borders) {
      country.borders.map(countryCode => {
        return getCountry(countryCode);
      });
    }

    return setBorderCountries([]);
  }, [country, getCountry]);

  return { borderCountries, error };
}