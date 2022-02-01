import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const CountriesContext = React.createContext();

const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectFilter, setSelectFilter] = useState('All');

  useEffect(() => {
    trackPromise(
      axios
        .get('https://restcountries.com/v2/all')
        .then((res) => setCountries(res.data))
    );
  }, []);

  return (
    <CountriesContext.Provider
      value={{ countries, filter, setFilter, selectFilter, setSelectFilter }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContextProvider, CountriesContext };
