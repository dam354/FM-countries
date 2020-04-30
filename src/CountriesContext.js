import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CountriesContext = React.createContext();

const CountriesContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => setCountries(res.data));
  }, []);

  return (
    <CountriesContext.Provider value={{ countries, input, handleInput }}>
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContextProvider, CountriesContext };
