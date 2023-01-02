import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/header' element={<Header />} />;
          <Route path='/header' element={<header />} />;

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
