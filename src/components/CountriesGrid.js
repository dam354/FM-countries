import React, { useContext } from 'react';
import { CountriesContext } from '../CountriesContext';
import Container from './Container';
import CountryCard from './CountryCard';

const CountriesGrid = () => {
  const { countries } = useContext(CountriesContext);
  // console.log('countries:', countries);s

  const countriesElement = countries.map((country, i) => {
    return <CountryCard country={country} key={i} />;
  });

  return (
    <div className="pt-10 bg-appbg">
      <Container>
        <div className=" w-full grid gap-8	 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {countriesElement}
        </div>
      </Container>
    </div>
  );
};

export default CountriesGrid;
