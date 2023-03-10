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
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [token, setToken] = useState<any>("");
  // const loggedIn = window.localStorage.getItem("isLoggedIn");

  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Loginheader />} >
          <Route path="SignUp" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="Login" element={<Login />} />
        </Route>


        <Route path="/Sidebar" element={
          <PrivateRoute><Sidebar /></PrivateRoute>}>

          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Getapi" element={<Getapi />} />
        </Route>




      </Routes>


      <Footers />



    </div >
  );
}

export default App;
