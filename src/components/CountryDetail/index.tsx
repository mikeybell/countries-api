import React from 'react';
import { useParams } from 'react-router-dom';
import { useCountry } from './hooks/useCountry';
import styles from "./countryDetail.module.css";

export const CountryDetail = () => {
  // @ts-ignore
  const { slug } = useParams();
  const { country, error } = useCountry(slug);
  const {
    container,
    infoContainer,
    detailsContainer,
    img,
    header,
    columns,
    borderCountries,
    value,
    listItem,
    flagStyle
  } = styles;

  const getArrayValues = (arr: any) => {
    const value = arr?.map((item: {name: string}, index: number) => {
      if (arr.length > 1 && index !== (arr.length - 1)) {
        return ` ${item.name}, `
      }
      return ` ${item.name}`
    })
    return [...value];
  }

  if (error) {
    return <p>{error}</p>
  }

  console.log(country)

  if (country) {
    const {
    borders,
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
                  <span className={value}> {population}</span>
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
            <div className={borderCountries}></div>
          </div>
        </div>
      </section>
    )
  }

  return <p>Loading...</p>;
}