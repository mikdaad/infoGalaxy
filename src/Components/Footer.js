import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              cashway <span className="ft-sign">clicks</span>
            </p>
            <p className="ft-description">
              Talk to professional finance trainers and get financial advice, online
              strategies , tips  and experience  notes within the online environment . On-demand
              financial services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Lead flipping fundamentals</a>
            </li>
            <li>
              <a href="#services">Web flow Recursion</a>
            </li>
            <li>
              <a href="#services">Job marketing</a>
            </li>
            <li>
              <a href="#services">project management</a>
            </li>
            <li>
              <a href="#services">web/app development</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>Consultations</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:cashwayclicks@gmail.com">cashwayclicks@gmail.com</a>
            </li>
      
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2020-2024 cashway+. All rights reserved.</p>

        
      </div>
    </div>
  );
}

export default Footer;
