import { useEffect, useRef, useState } from "react";
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import "../Styles/search.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SliderComponent from "../Pages/slider";
import { useNavigate  } from "react-router-dom";
import home from "./home.mp3";
import ImageGallery from "./images";
import TextSwiper from "./swipe";
import Getimages from "./getimages";
import Gettext from "./gettext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


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
  const [images, setImages] = useState([]);
  const [isimage, setIsimage] = useState(false);
  const [istext, setIstext] = useState(false);
  const [code, setCode] = useState(false);
  const [sugs, setSugs] = useState([]);
  const [content, setContent] = useState(false);

 

  


  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };
  

 

  const handleButtonClick = (index) => {
    const text = sugs[index];
  
    console.log(text);
    setusername(text);
    
    setCode(false);
    setContent(true);
    
    (function init() {
      handleSearch();
  })();
  setIstext(true);
  setIsimage(true);
    
};

  const handleSearch = async (e) => {
    try {
      setCode(false);
      const invokeUrl = 'https://q40huzkrs2.execute-api.eu-north-1.amazonaws.com/1/';
      
    

      
      const body = {
        // Assuming the body needs to be sent as JSON
        "base":username,
        "exponent":2
      };
      let toastId = null;
      toastId = toast.loading("Processing...");

      const response = await axios.post(invokeUrl, body);
      console.log(response);

      toast.dismiss(toastId);
      if (response.data.code == "0"){
        
       
        setContent(true);
        console.log("jaloo");

       
      console.log(response.data.images);
      const imageurlss=response.data.images;
      let imageurlsss = JSON.parse(imageurlss);
      setIsimage(true);
      setImages(imageurlsss);
      
      
      const text=response.data.body
      
    
      const lines = text.replace(/(^"|"$)/g, '') // Remove leading/trailing quotes
                             .replace(/\\n/g, '\n') // Replace escaped newlines with actual newlines
                             .replace(/\\\\/g, '\\'); // Replace double backslashes with a single backslash if needed
      
      setIstext(true);
      setTextLines(lines);
      console.log(lines);
     
      
     
            
          


      setPatientName(lines);
    } 
    if (response.data.code == "1")
    {
      setIstext(false);
      setContent(true);
      console.log("balo");
      const body = JSON.parse(response.data.body);
      console.log(body);
      setCode(true);
      setSugs(body);

      

    }
    if (response.data.code == "2")
      {
        let toastId = toast.loading("The requested page is not found, please try a different one.");
        setusername("");
      
        // Update the toast with a new message after 2 seconds
        setTimeout(() => {
          toast.update(toastId, {
            render: "Please find a different page.",
            type: "error",
            isLoading: false, // Set loading to false
            autoClose: 3000, // Automatically close after 3 seconds
          });
        }, 2000);
      }}
     catch (error) {
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
      <h1 className="legal-siteTitlenew">
        <Link to="/">
        InFo <span className="legal-siteTitlenews"> Galaxy </span>
        </Link>
        <span> </span>
        <span> </span>
        <span> </span>
        <button className="text-appointment-btnews" onClick={handleStop}> 🎵OFF</button>
      </h1>

<div className="search-bar-container">
            <input
                type="text"
                value={username}
                onChange={handleidChange}
                placeholder="Search..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                🔍
            </button>
        </div>


<p className="para"></p>





      

{(content)&& <div >

      {(code)&&<div className="form-containernew">
        <h4 className="dt-titlenew">
          <span>suggestions </span>
        </h4>
      
            {sugs.map((option, index) => (
              <button key={index} className="text-appointment-btnsug"  onClick={() => handleButtonClick(index)} >
                    {option}
                </button>
            ))}
        </div>}
      
      
       
        
       
        <Tabs>
        
      <TabList>
      <div className= "tabs" >
        <Tab className= "tabbutton" >Text</Tab>
        <Tab className= "tabbutton">Images</Tab>
        </div>
        
      </TabList>

      <TabPanel>
        {istext && <Gettext textLines={textLines} username={username} />}
      </TabPanel>
      <TabPanel>
        {isimage && <Getimages images={images} />}
      </TabPanel>
  
    </Tabs>
 
       

      </div>
}

      <div className="legal-footer">
        <p>© 2024  infogalaxy+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
    
    
  );
  
}

export default AppointmentForm;
