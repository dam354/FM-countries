import React, { useContext } from 'react';
import Header from './components/Header';
import SearchInputs from './components/SearchInputs';
import CountriesGrid from './components/CountriesGrid';
import { ThemeContext } from './ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="  bg-appbg h-screen" data-theme={theme}>
      <Header />
      <SearchInputs />
      <CountriesGrid></CountriesGrid>
    </div>
  );
}

export default App;
