import { useState, useEffect } from 'react';
import { Country } from '../../types';

interface Countries {
  error: string;
  countries: Country[];
}

export const useAllCountries = (): Countries => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    try {
      const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCountries(data)
    } catch (err) {
      setError(err.message);
    }
  }

  return { countries, error };
}