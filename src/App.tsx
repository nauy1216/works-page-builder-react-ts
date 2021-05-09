import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import { renderRoutes } from './router/index';
import { routes, basename } from './router/config';
import './App.css';
import { Provider as StoreProvider } from 'react-redux';
import store from './store/store2';

export default function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter basename={basename}>{renderRoutes(routes)}</BrowserRouter>
    </StoreProvider>
  );
}
