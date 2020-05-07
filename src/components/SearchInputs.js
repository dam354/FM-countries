import React, { useContext, useState, useEffect } from 'react';
import { CountriesContext } from '../CountriesContext';
import Container from './Container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '../hooks/useDebounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchInputs = () => {
  const { setFilter, setSelectFilter, selectFilter } = useContext(
    CountriesContext
  );
  const [select, setSelect] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 200);

  useEffect(() => {
    setSelect(selectFilter);
  }, [selectFilter]);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setFilter(searchTerm);
      } else {
        setFilter([]);
      }
    },
    [debouncedSearchTerm, setFilter, searchTerm] // Only call effect if debounced search term changes
  );

  const handleSelect = (e) => {
    setSelect(e.target.value);
    setSelectFilter(e.target.value);
  };

  const clearInput =
    searchTerm.length > 0 ? (
      <div
        onClick={() => {
          setSearchTerm('');
        }}
        className="absolute right-0 pr-3 flex items-center justify-center  text-inputtext inset-y-0"
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    ) : null;

  return (
    <div className="pt-32">
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
              value={searchTerm}
              placeholder="Search for a country..."
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              id="Search"
            />
            {clearInput}
          </div>
          <div className="w-full pt-10 sm:pt-0 sm:w-64">
            <div className=" relative ">
              <select
                value={select}
                onChange={handleSelect}
                className="block appearance-none w-full bg-headerbg text-inputtext px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
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
