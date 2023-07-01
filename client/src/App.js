import './App.css';
// import Header from './Header'
import DonateNow from './DonateNow'
import SignIn from './Components/googleSignin/signIn';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { auth, provider } from './Components/googleSignin/config'
import { signInWithPopup } from "firebase/auth";
import {useState } from 'react';

export const AppContext = createContext();

function App() {
  const storedEmail = localStorage.getItem("email");
  const [value, setValue] = useState(storedEmail);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const userEmail = data.user.email;
      setValue(userEmail);
      localStorage.setItem("email", userEmail);
    });
  };

  return (
    <AppContext.Provider value={{ setValue, value, handleClick }}>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/donate" element={<DonateNow />} />
      </Routes>
    </AppContext.Provider>
  );
}


export default App;
