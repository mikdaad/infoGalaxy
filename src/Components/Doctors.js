import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.jpg";

import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Team </span>
        </h3>

        <p className="dt-description">
        "Meet our team of dedicated students behind this showcase website. 
         Join us and explore the wealth of knowledge available at your fingertips."
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="muhammed mikdad u m"
          title="student - srinivas university"
          reviews="Backend"
          
        />
        <DoctorCard
          img={profile2}
          name="krishna C"
          title="student - srinivas university"
          reviews="FrontEnd"
          
        />
        <DoctorCard
          img={profile3}
          name="Fatheen Yusuf "
          title="student - srinivas university"
          reviews="FrontEnd"
          
        />
      </div>
    </div>
  );
}

export default Doctors;
