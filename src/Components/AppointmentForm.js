import { useEffect, useRef, useState } from "react";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import SliderComponent from "../Pages/slider";
import { useNavigate  } from "react-router-dom";
import home from "./home.mp3"


import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://8hyox0r1e5.execute-api.eu-north-1.amazonaws.com/first/hello',
  params: {
    "key1":"mikdad",
    "key2":"mikdadd",
    "key3":"mikdaddd",
  }
};



//const translations = response.data[0].translations[0].text;



function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [username, setusername] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [childData, setChildData] = useState(2100);
  const [minms, setminm] = useState(2100);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [textLines, setTextLines] = useState([]);
 

  


  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  const handleSearch = async (e) => {
    try {
      const invokeUrl = 'https://q40huzkrs2.execute-api.eu-north-1.amazonaws.com/1/';
      
    

      
      const body = {
        // Assuming the body needs to be sent as JSON
        "base":username,
        "exponent":2
      };

      const response = await axios.post(invokeUrl, body);
      console.log(response);
      
      const text=response.data.body
      const lines = text.split("\n");
      setTextLines(lines);
      console.log(lines);
      
        
            
          


      setPatientName(lines);
    }  catch (error) {
        console.error(error);
      }
    
  };
 

  const  handleNameChange = async (e) => {

    setPatientName(e.target.value);
    
      
    
  };
  const handleidChange = (e) => {
    e.preventDefault();
    setusername(e.target.value);
  };

  const setpref = (e) => {
    e.preventDefault();
    setPreferredMode(e.target.value);
  };


  useEffect(() => {
    audioRef.current = new Audio(home); 
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing the audio:', error);
      }
    };
    playAudio();

    // Clean up function to stop the audio when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(!isPlaying);
    }
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    const allls= "Client name : " + patientName + "\n client username: " + username +"\n client time: " + appointmentTime +"\n client course: " + patientGender +"\n client price: " + childData  + "\n client Batch: "+ preferredMode;


    const webhookUrl = "https://discordapp.com/api/webhooks/1255908211601703004/1jM3LEzTu25bTOY48y6xDKtJO-U8ZkKSz8O9jXS5X-df4RdFOVvXiOerG2HJQq6zxvEO";
    const payload = {
      content: allls

    };
    const headers = {
      Authorization: "MTE4NDE1OTI4NjE3NjI2ODM1OA.GoRXyJ.w_Oqd6Wj40SwZ2JUrZdBUlMhCkrexxE0gpJAKw"
  };
    try {
       fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...headers
      },
        body: JSON.stringify(payload),
      });
      alert('error processing !');
    } catch (error) {
      console.error('Error handling request:', error);
    }
    
    navigate("/payment");
  ;


    // Validate form inputs
    const errors = {};
    

    // Reset form fields and errors after successful submission
    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Application Sent to Cashway!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
        InfoGalaxy
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Kindly specify the query clearly.  </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          
        </h2>
        <h2>
        <button className="text-appointment-btn" onClick={handleStop}> 🎵OFF</button>
        </h2>

        <form className="form-content" onSubmit={handleSearch}>

        {(patientGender==="1")&&<SliderComponent valb={7399}  onDataUpdate={handleChildData} minm={2199} />}
          {(patientGender==="2")&&<SliderComponent valb={6520}  onDataUpdate={handleChildData} minm={1850} />}
          {(patientGender==="3")&&<SliderComponent valb={4300}  onDataUpdate={handleChildData} minm={1230} />}
          {(patientGender==="4")&&<SliderComponent valb={2600}  onDataUpdate={handleChildData} minm={745} />}
          {(patientGender==="5")&&<SliderComponent valb={2600}  onDataUpdate={handleChildData} minm={745} />}
          {(patientGender==="6")&&<SliderComponent valb={3600}  onDataUpdate={handleChildData} minm={1030} />}
          <br />
          
          <label>
            search query :
            <input
              type="text"
              value={username}
              onChange={handleidChange }
              required
              
            />
             <button   onClick={handleSearch} className="text-appointment-btn">
          
          SEARCH🟢
          
          
          </button>
   
             
              </label>
              
          <br />

          <br />

          <div className="hero-sectionew">
        <div className="text-sectionew">
         
          <h2 className="text-titlenew">
          {username.toUpperCase()}
          </h2>
          <p className="text-descritpionew">
      
          {textLines}
          </p>
         
        </div>
        </div>


          <br />
          
        
          
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2024  infogalaxy+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
