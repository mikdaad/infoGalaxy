// src/App.js
import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './style.css';




const Sign = ({fetched,setfetched,signbtn,setsignbtn}) => {
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div>
      {showSignIn ? <SignIn toggleForm={toggleForm} fetched={fetched}  setfetched={setfetched} signbtn={signbtn} setsignbtn={setsignbtn} /> : <SignUp toggleForm={toggleForm} fetched={fetched}  setfetched={setfetched} signbtn={signbtn} setsignbtn={setsignbtn} />}
    </div>
  );
};

export default Sign;
