import React, { useContext } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { CountriesContext } from '../CountriesContext';
import Container from './Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import Img from 'react-image';

const CountryDetail = () => {
  const { countries } = useContext(CountriesContext);
  const { country } = useParams();

  const history = useHistory();

  const thisCountry = countries.find((count) => count.name === country);

  const goBack = () => {
    history.push('/');
    history.replace('');
    // history.goBack();
  };

  if (thisCountry) {
    const {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = thisCountry;
    console.log(thisCountry);

    const currencyElement = currencies
      .map((currency) => currency.name)
      .join(', ');
    const languagesElement = languages
      .map((language) => language.name)
      .join(', ');

    const fullCountry = borders.map((acronym) => {
      const full = countries.find((x) => x.alpha3Code === acronym);

      return full.name;
    });

    const bordersCountries = fullCountry.map((country) => {
      return (
        <Link to={`/countries/${encodeURI(country)}`}>
          <div className="font-body text-headercolor hover:bg-buttonhover text-lg font-light px-2 py-1 mx-1 mt-2 bg-headerbg shadow rounded">
            {country}
          </div>
        </Link>
      );
    });

    console.log('fullCountry:', fullCountry);
    return (
      <div className="pt-32 pb-20 bg-appbg">
        <Container>
          <button
            onClick={goBack}
            className="bg-headerbg  hover:bg-buttonhover rounded  py-1 px-4  font-body text-headercolor shadow "
          >
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="mr-3" /> Back
          </button>

          <div className="flex mt-10 flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2">
              <Img
                src={flag}
                className="shadow w-full md:w-full mx-auto"
                alt=""
              />
            </div>

            <div className="w-full mt-10 md:w-1/2 md:mt-0  md:ml-20">
              <h1 className="font-body text-headercolor   text-2xl font-extrabold">
                {name}
              </h1>
              <div className="flex justify-between mt-10">
                <div>
                  <p className="font-body text-headercolor   text-lg font-light">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Native Name:
                    </span>{' '}
                    {nativeName}
                  </p>

                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Population:
                    </span>{' '}
                    {population}
                  </p>

                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Region:
                    </span>{' '}
                    {region}
                  </p>

                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      SubRegion:
                    </span>{' '}
                    {subregion}
                  </p>

                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Capital:
                    </span>{' '}
                    {capital}
                  </p>
                </div>
                <div className="md:pl-5">
                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Top Level Domain:
                    </span>{' '}
                    {topLevelDomain}
                  </p>

                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Currencies:
                    </span>{' '}
                    {currencyElement}
                  </p>

                  <p className="font-body text-headercolor   text-lg font-md">
                    <span className=" pt-5 md: pt-0 block md:inline font-body text-headercolor   text-lg font-semibold">
                      Languages:
                    </span>{' '}
                    {languagesElement}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap  justify-start items-center mt-10">
                <div className=" pt-5 md:px-2 md:py-1 block md:inline font-body text-headercolor   text-lg font-semibold">
                  Borders Countries:
                </div>
                <div className="flex flex-wrap w-full justify-start items-center">
                  {bordersCountries}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
    return (
      <h1 className="font-body text-headercolor text-2xl font-extrabold">
        Loading...
      </h1>
    );
  }
};

export default CountryDetail;
