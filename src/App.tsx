import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import { renderRoutes } from './router/index';
import { routes, basename } from './router/config';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return <BrowserRouter basename={basename}>{renderRoutes(routes)}</BrowserRouter>;
}
