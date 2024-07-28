import React from "react";
import Doctor from "../Assets/doctor-book-appointment.gif";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to the path towards financial freedom. Select the right training programs to empower yourself. As coordinators,
         guide our clients on their journey to achieve financial independence.
         Together, let's tailor strategies and knowledge to their aspirations. Join us in this transformative journey towards success.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Training"
          description="Select a training program that matches your current knowledge and skills. Customize your learning journey to best suit your expertise. 
          Tailor your training selection to maximize your potential growth."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the batch that suits you best, and let our dedicated team of training professionals ensure your slots with personalized care."
        />

        <SolutionStep
          title="Get Your trainings and start earning "
          description="Our experienced trainers and specialists are here to provide expert advice and personalized financial trainings helping you achieve your best possible financial potential."
        />
      </div>
    </div>
  );
}

export default About;
