import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MenuProvider } from './contexts/usercontext';
import { SearchProvider } from './contexts/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
      <MenuProvider>
      <App />
      </MenuProvider>
    </SearchProvider>
  </React.StrictMode>
);

