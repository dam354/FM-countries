import React from 'react';
import { motion } from 'framer-motion';
import { popFormat } from '../utils/helper';
const CountryCard = ({ country }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.075 }}
      className="rounded shadow bg-headerbg  "
    >
      <img src={country.flag} className="rounded-t" alt="" />
      <div className="px-6 py-8 text-headercolor  ">
        <h4 className="font-body text-headercolor   text-lg font-extrabold pb-4">
          {country.name}
        </h4>
        <p className="text-headercolor text-sm font-light pb-1">
          <span className="text-headercolor text-sm font-semibold">
            Population:{' '}
          </span>
          {popFormat(country.population)}
        </p>
        <p className="text-headercolor text-sm font-light pb-1">
          <span className="text-headercolor text-sm font-semibold">
            Region:{' '}
          </span>
          {country.region}
        </p>
        <p className="text-headercolor text-sm font-light pb-1">
          <span className="text-headercolor text-sm font-semibold">
            Capital:{' '}
          </span>
          {country.capital}
        </p>
      </div>
    </motion.div>
  );
};

export default CountryCard;
