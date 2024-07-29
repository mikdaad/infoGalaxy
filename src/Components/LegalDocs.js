import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Info <span className="legal-siteSign">galaxy</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
     

Welcome to infogalaxy, your reliable online information provider.
 Our mission is to offer information accessible for everyone . 
 By using our platform, you agree to adhere to the terms specified in our Privacy Policy and Terms of Service.


        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Your privacy is our top priority. Our Privacy Policy details how we gather, utilize,
         and safeguard your information. 
        We uphold rigorous standards in data security, ensuring that your information is handled with the highest confidentiality and care.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        When using infogalaxy, you agree to our Terms of Service. 
        </p>

    
      </div>

      <div className="legal-footer">
        <p>© 2024 infogalaxy+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
