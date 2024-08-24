// src/SignUp.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import supabase from './supabaseclient';
import emailicon from "./icons/email.svg";
import passlock from "./icons/password lock.svg";
import logo from "./Images/logo.png";

const SignUp = ({ toggleForm,fetched,setfetched,signbtn,setsignbtn }) => {
  const [email, setEmail] = useState('');
  const [password_hash, setPassword] = useState('');
  const [data, setUser] = useState('');
      
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', email)
        .eq('password_hash', password_hash)
        .single();
  
      if (error || !data) {
        alert('Invalid email or password');
      } else {
        setfetched(true);
        console.log("successfull")
      let toastId = toast.loading("loging...");

       console.log('Data inserted:', data);

    setTimeout(() => {
      toast.update(toastId, {
        render: "login successful!",
        type: "success",
        isLoading: false, 
        autoClose: 3000, 
      });
    }, 2000);
        setUser(data);
        
        setsignbtn(!signbtn);
      }
    }


  

  return (
    <div class="contact-container">
    <div class="right">
        <h1 class="title">Sign Up</h1>
        <img class="logo" src={logo} alt=""/>
        <form onSubmit={handleSignUp}>
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
            <button type="submit">Sign In</button>
            <button onClick={toggleForm}>Go to Sign Up</button>
            <a href="#" class="link">Forgot Password</a>
          
            
        </form>
    </div>
  </div>
  );
};

export default SignUp;
