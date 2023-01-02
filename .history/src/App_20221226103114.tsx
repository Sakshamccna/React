import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './Components/Headers';

import Footers from './Components/Footers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Headers />} />
        </Routes>

      </BrowserRouter>



    </div >
  );
}

export default App;
