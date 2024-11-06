// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes'; // Import các route

const App = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default App;
