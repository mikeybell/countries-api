import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCountryByName } from './hooks/useGetCountryByName';
import { useGetBorderCountries } from './hooks/useGetBorderCountries';
import { BorderButton } from './BorderButton';
import { BackButton } from './BackButton';
import { Loader } from '../Loader';
import { getArrayValues } from './utils';
import styles from "./styles/countryDetail.module.css";

export const CountryDetail = () => {
  // @ts-ignore
  const { slug } = useParams();
  const { country, error } = useGetCountryByName(slug);
  const { borderCountries } = useGetBorderCountries(country);

  const {
    container,
    infoContainer,
    detailsContainer,
    img,
    header,
    columns,
    borderCountriesStyle,
    value,
    listItem,
    flagStyle,
    borderButtons,
  } = styles;

  if (error) {
    return <p>{error}</p>
  }

  if (country) {
    const {
      capital,
      currencies,
      flag,
      languages,
      name,
      nativeName,
      population,
      region,
      subregion,
      topLevelDomain,
    } = country;

    return (
      <section className={container}>
        <BackButton />
        <div className={infoContainer}>
          <div className={flagStyle}>
            <img className={img} src={flag} alt={`The flag of ${name}`} />
          </div>
          <div className={detailsContainer}>
            <h2 className={header}>{name}</h2>
            <div className={columns}>
              <ul>
                <li className={listItem}>
                  Native Name:
                  <span className={value}> {nativeName}</span>
                </li>
                <li className={listItem}>
                  Population:
                  <span className={value}> {population.toLocaleString('en')}</span>
                </li>
                <li className={listItem}>
                  Region:
                  <span className={value}> {region}</span>
                </li>
                <li className={listItem}>
                  Sub Region:
                  <span className={value}> {subregion}</span>
                </li>
                <li className={listItem}>
                  Capital:
                  <span className={value}> {capital}</span>
                </li>
              </ul>
              <ul>
                <li className={listItem}>
                  Top Level Domain:
                  <span className={value}> {topLevelDomain}</span>
                </li>
                <li className={listItem}>
                  Currencies:
                  <span className={value}>
                    {getArrayValues(currencies)}
                  </span>
                </li>
                <li className={listItem}>
                  Languages:
                  <span className={value}>
                    {getArrayValues(languages)}
                  </span>
                </li>
              </ul>
            </div>
            <div className={borderCountriesStyle}>
              <p className={listItem}>Border Countries:</p>
              <div className={borderButtons}>
                {borderCountries?.map(country => {
                  return <BorderButton key={country.alpha3Code} country={country} />
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return <Loader />;
}