import React, { useContext, useState, useEffect } from 'react';
import { CountriesContext } from '../CountriesContext';
import Container from './Container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInputs = () => {
  const { input, handleInput } = useContext(CountriesContext);

  return (
    <div className="pt-10">
      <Container>
        <div className="flex justify-between flex-col sm:flex-row md:flex-row lg:flex:row">
          <div className="relative rounded shadow w-full  sm:w-64">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none text-inputtext inset-y-0">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              className="  bg-headerbg focus:outline-none rounded  py-3 px-4  leading-tight focus:outline-none 
          text-inputtext pl-10 w-full h-full
          "
              placeholder="Search for a country..."
              value={input}
              onChange={handleInput}
              type="text"
            />
          </div>
          <div className="w-full pt-10 sm:pt-0 sm:w-64">
            <div className=" relative ">
              <select className="block appearance-none w-full bg-headerbg text-inputtext px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Africa</option>
                <option>Americas</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
              </select>
              <div className="pointer-events-none text-inputtext absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchInputs;
