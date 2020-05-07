import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Container from './Container';
import { capitalize } from '../utils/helper';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const icon = theme === 'dark' ? faMoon : faSun;

  return (
    <nav className="   bg-headerbg h-20 shadow w-full fixed z-10">
      <Container>
        <div className="flex w-full items-center justify-between flew-row h-20">
          <div className="font-body text-headercolor   text-2xl font-extrabold">
            <Link to="/">Where in the World</Link>
          </div>

          <div
            onClick={() => changeTheme()}
            className="font-body text-headercolor   text-xl font-extrabold"
          >
            <FontAwesomeIcon icon={icon} />{' '}
            <span className="hidden sm:inline">{capitalize(theme)} Mode </span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
