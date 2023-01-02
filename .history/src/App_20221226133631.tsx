import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Headers from './Components/Headers';

import Footers from './Components/Footers';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SignUp />
        <Routes>
          {/* <Route path="/" element={<Headers />} >
            <Route path="/" element={<Sidebar />} >
              <Route path="Home" element={<Home />} />
              <Route path="About" element={<About />} />
            </Route>
          </Route> */}
          <Route path="/" element={<Headers />} >

          </Route>






        </Routes>

      </BrowserRouter>
      <Footers />



    </div >
  );
}

export default App;
