import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './Components/Headers';

function App() {
  return (
    <div className="App">
      </Header>
      <BrowserRouter>

        <Routes>


          <Route path='/Header' element={<Headers />} />;

        </Routes>

      </BrowserRouter>

    </div >
  );
}

export default App;
