import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./providers/UserContext";
import './styles/reset.css';
import './styles/style.css';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

function App() {

  const initialToken = localStorage.getItem("token");
  const initialUsername = localStorage.getItem("username");
  const initialUserStreet = localStorage.getItem("street");
  const initialUserNumber = localStorage.getItem("number");

  const [infoUsername, setInfoUsername] = useState(JSON.parse(initialUsername));
  const [infoStreet, setInfoStreet] = useState(JSON.parse(initialUserStreet));
  const [infoNumber, setInfoNumber] = useState(JSON.parse(initialUserNumber));
  const [token, setToken] = useState(initialToken);

  const [cartAmount, setCartAmount] = React.useState(0);

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
