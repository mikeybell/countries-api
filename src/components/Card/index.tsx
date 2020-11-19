import React from 'react';
import { Link } from 'react-router-dom'
import styles from './card.module.css';
import { Country } from '../types';

export const Card = ({
  name,
  population,
  region,
  capital,
  flag
}: Country) => {
  const { container, img, header, info, item, value } = styles;
  const formattedPop = population.toLocaleString('en');
  const slug = name.replaceAll(' ', '-');

  return (
    <Link to={slug}>
      <div className={container}>
        <img className={img} src={flag} alt={`The flag of ${name}`} />
        <div className={info}>
          <h2 className={header}>{name}</h2>
          <p className={item}>
            Population:
            <span className={value}> {formattedPop}</span>
          </p>
          <p className={item}>
            Region:
            <span className={value}> {region}</span>
          </p>
          <p className={item}>
            Capital:
            <span className={value}> {capital}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}