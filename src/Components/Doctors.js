import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.jpg";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";

import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our coordinators</span>
        </h3>

        <p className="dt-description">
        "Meet our team of dedicated professionals behind this showcase website. 
         Discover how our team's expertise can enhance your understanding of various topics.
         Join us and explore the wealth of knowledge available at your fingertips."
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="muhammed mikdad u m"
          title="student - srinivas university"
          stars="4.9"
          reviews="728"
        />
        <DoctorCard
          img={profile2}
          name="krishna C"
          title="student - srinivas university"
          stars="4.8"
          reviews="292"
        />
        <DoctorCard
          img={profile3}
          name="Fatheen Yusuf "
          title="student - srinivas university"
          stars="4.7"
          reviews="356"
        />
      </div>
    </div>
  );
}

export default Doctors;
