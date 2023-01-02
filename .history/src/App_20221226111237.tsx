import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './Components/Headers';

import Footers from './Components/Footers';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Headers />} />
          <Route path="/Sidebar" element={<Sidebar />} />






        </Routes>

      </BrowserRouter>
      <Footers />



    </div >
  );
}

export default App;
