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
import Loginheader from './Components/Loginheader';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>


          {/* <Route path="SignUp" element={<SignUp />} /> */}
          <Route path="/" element={<Login />} />



          <Route path="Headers" element={<Headers />} >
            <Route path="/Sidebar" element={<Sidebar />} >
              <Route path="Sidebar/Home" element={<Home />} />
              <Route path="Sidebar/About" element={<About />} />
            </Route>
          </Route>






        </Routes>

      </BrowserRouter>
      <Footers />



    </div >
  );
}

export default App;
