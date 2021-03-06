import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.generated.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeContextProvider } from './ThemeContext';
import { CountriesContextProvider } from './CountriesContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ThemeContextProvider>
      <CountriesContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CountriesContextProvider>
    </ThemeContextProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
