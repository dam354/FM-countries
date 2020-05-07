import React, { useContext } from 'react';
import Header from './components/Header';
import SearchInputs from './components/SearchInputs';
import CountriesGrid from './components/CountriesGrid';
import Footer from './components/Footer';
import { ThemeContext } from './ThemeContext';

import { Switch, Route } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="font-body  bg-appbg h-screen " data-theme={theme}>
      <Header />

      <Switch>
        <Route path="/countries/:country">
          <CountryDetail />
        </Route>
        <Route exact path="/">
          <SearchInputs />
          <CountriesGrid />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
