// src/SignIn.js
import React, { useState } from 'react';
import supabase from './supabaseclient';
import emailicon from "./icons/email.svg";
import passlock from "./icons/password lock.svg";
import logo from "./Images/logo.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = ({ toggleForm,fetched,setfetched,signbtn,setsignbtn }) => {
  const [email, setEmail] = useState('');
  const [password_hash, setPassword] = useState('');

  
  const handleSignIn = async (e) => {
    e.preventDefault();

  const { data, error } = await supabase
    .from('users')
    .insert([
      { username: email, password_hash }
    ]);
    setfetched(true);

  if (error) {
    console.error('Error inserting data:', error);
    toast.error('Failed to save data.');
  } else {
    let toastId = toast.loading("Saving...");

    console.log('Data inserted:', data);

    setTimeout(() => {
      toast.update(toastId, {
        render: "Saved successfully!",
        type: "success",
        isLoading: false, 
        autoClose: 3000, 
      });
    }, 2000);
    setsignbtn(!signbtn);
  }
};
  
 
  return (
    <div class="contact-container">
    <div class="right">
        <h1 class="title">Sign Up</h1>
        <img class="logo" src={logo} alt=""/>
        <form onSubmit={handleSignIn}>
            <div class="username">
                <img class="icon email-icon" src={emailicon} alt=""/>
                <input
            type="email"
            placeholder="Email"
             class="user-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
            </div>
            <div class="password">
                <img class="icon password-icon" src={passlock} alt=""/>
                <input
            type="password"
            placeholder="Password"
            value={password_hash}
            class="pass-input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
            </div>
            <div class="keepme">
                <input type="checkbox" checked="true"/>
                Keep Me Logged In
            </div>
            <button type="submit">Sign Up</button>
            <button onClick={toggleForm}>Go  Sign In</button>
            
            
        </form>
    </div>
  </div>
  
  );
};

export default SignIn;
