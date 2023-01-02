import React, { useEffect, useState } from 'react';
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
import Getapi from './Components/Getapi';

function App() {
  const [token, setToken] = useState<any>("");
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  useEffect(() => {
    const result: any = localStorage.getItem("token");
    setToken(result);
  })
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          {!token ?
            <Route path="/" element={<Loginheader />} >
              <Route path="SignUp" element={<SignUp />} />
              <Route path="/" element={<Login />} />
              <Route path="Login" element={<Login />} />
            </Route>


            :

            <Route path="Sidebar" element={<Sidebar />} >
              <Route path="Home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Getapi" element={<Getapi />} />
            </Route>
          }







        </Routes>

      </BrowserRouter>
      <Footers />



    </div >
  );
}

export default App;
