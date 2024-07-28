import React from "react";
import InformationCard from "./InformationCard";
import { faWaveSquare, faTrademark, faCalculator } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>CORE TRAININGS</span>
        </h3>
        <p className="info-description">
        We offer core training programs for youths in trading fundamentals, webpage flow and recursion mastery,
         and job marketing. Gain expertise to optimize online presence, maximize profits, and streamline hiring processes. 
        Unlock potential earnings up to ₹7,000 per day with our specialized courses. Join us to build a successful future.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="lead flipping"
          description="Unlock the potential to earn in the lead flipping environment through our training. Open a flipping account with a low Stake,
           and learn market fundamentals. Develop a strategy and practice with our virtual money. 
          With dedication and expertise gained from our training, 
          you can aim to make enormous profits, potentially earning up to $120 per day."
          icon={faTrademark}
        />

        <InformationCard
          title=" webpage flow Recursion"
          description="Unlock the potential to master webpage flow and recursion course.
           Learn secret MLM strategies to optimize your online presence and sales funnel. Begin by understanding the basics of webpage design and 
           recursive techniques. Apply these skills to enhance your marketing strategy, streamline operations, and maximize profits. 
          With dedication and the expertise gained from our course, you can aim to make enormous profits, potentially earning up to ₹7,500 per day.."
          icon={faWaveSquare}
        />

        <InformationCard
          title="job marketing "
          description="
Unlock the potential to master job marketing course.
Learn secret strategies to optimize hiring processes using mobile technology.
 Begin by understanding the basics of mobile recruitment and marketing techniques. Apply these skills to attract top talent, streamline hiring operations, and maximize efficiency.
 With dedication and the expertise gained from our course, you can aim to make enormous profits, potentially earning up to ₹1,00 per day."
          icon={faCalculator}
        />
      </div>
    </div>
  );
}

export default Info;
