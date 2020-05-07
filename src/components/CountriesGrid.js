import React, { useContext } from 'react';
import { CountriesContext } from '../CountriesContext';
import Container from './Container';
import CountryCard from './CountryCard';
import { usePromiseTracker } from 'react-promise-tracker';

const CountriesGrid = () => {
  const { promiseInProgress } = usePromiseTracker();
  const { countries, filter, selectFilter } = useContext(CountriesContext);
  // console.log('this is', filter);

  const countriesFiltered = countries
    .filter((country) => {
      if (selectFilter == 'All') return country;

      if (country.region == selectFilter) {
        return country;
      } else {
        return null;
      }
    })
    .filter((country) => {
      if (filter == '') return country;
      if (country.name.toLowerCase().includes(filter.toLowerCase())) {
        return country;
      } else {
        return null;
      }
    });

  const countriesElement =
    countriesFiltered.length > 0 ? (
      countriesFiltered.map((country, i) => {
        return <CountryCard country={country} key={i} />;
      })
    ) : (
      <h1 className="font-body text-headercolor text-2xl font-extrabold">
        No Countries Found
      </h1>
    );

  // .map((country, i) => {
  //   return <CountryCard country={country} key={i} />;
  // });

  return (
    <div className="pt-10 pb-10 bg-appbg">
      <Container>
        <div className=" w-full grid gap-8	 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {promiseInProgress === true ? (
            <h1 className="font-body text-headercolor text-2xl font-extrabold">
              Loading...
            </h1>
          ) : (
            countriesElement
          )}
        </div>
      </Container>
    </div>
  );
};

export default CountriesGrid;
