import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import Container from './Container';
import { capitalize } from '../utils/helper';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const icon = theme === 'dark' ? faMoon : faSun;

  return (
    <nav className="   bg-headerbg h-20 shadow">
      <Container>
        <div className="flex w-full items-center justify-between flew-row h-20">
          <div className="font-body text-headercolor   text-2xl font-extrabold">
            Where in the World
          </div>

          <div
            onClick={() => changeTheme()}
            className="font-body text-headercolor   text-xl font-extrabold"
          >
            <FontAwesomeIcon icon={icon} /> {capitalize(theme)} Mode
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
