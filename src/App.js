import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./providers/UserContext";
import './styles/reset.css';
import './styles/style.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (

    <UserContext.Provider value={{ infoNumber, setInfoNumber, infoUsername, setInfoUsername, infoStreet, setInfoStreet, token, setToken }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signUp" element={<SignUpPage pageNumber = {1}/>}></Route>
          <Route path="/address" element={<SignUpPage pageNumber = {2}/>}></Route>
          <Route path="/payment" element={<SignUpPage pageNumber = {3}/>}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
