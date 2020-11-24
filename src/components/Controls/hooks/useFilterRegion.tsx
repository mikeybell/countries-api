import React, { useState, useContext, useEffect } from 'react';
import { DownArrow } from '../../../assets/down_arrow';
import { ThemeContext } from '../../App';
import styles from '../styles/regionFilter.module.css';
import { Country } from '../../types';

interface Props {
  countries: Country[];
  setCountriesList: (list: Country[]) => void;
}

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const useFilterRegion = ({ countries, setCountriesList }: Props) => {
  const theme = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [region, setRegion] = useState<string>('All');

  useEffect(() => {
    const filteredCountries = countries.filter((country: Country) => {
      if (region === 'All') return true;
      return country.region === region;
    });
    setCountriesList(filteredCountries);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleRegionSelect = (region: string): void => {
    setRegion(region);
    setShowMenu(false);
  };

  const iconColor = theme === 'light' ? '#000' : '#FFF';

  const {
    toggleButton,
    buttonGroup,
    regionButton,
    container
  } = styles;

  const FilterRegion = () => {
    return (
      <div className={container}>
        <button className={toggleButton} onClick={toggleMenu}>
          Filter by Region
          <DownArrow color={iconColor} />
        </button>
        {showMenu && (
          <div className={buttonGroup}>
            {regions.map(item =>
              <button
                className={regionButton}
                key={item}
                onClick={() => handleRegionSelect(item)}
              >
                {item}
              </button>
            )}
          </div>
        )}

      </div>
    )
  };

  return { region, FilterRegion };
}