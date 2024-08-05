import React from "react";
import TextSwiper from "./swipe";
import "../Styles/AppointmentForm.css";
import "../Styles/search.css";

function Gettext({textLines,username}) {
  return (
    <div className="hero-sectionew">
        <div className="text-sectionew">
         
          <h2 className="text-titlenew">
          {username.toUpperCase()}
          </h2>
         


        
          <TextSwiper textString = {textLines}/>
         
        </div>
        </div>);
}

export default Gettext;

