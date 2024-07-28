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
          cashway <span className="legal-siteSign">clicks</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
     

Welcome to CashwayClicks, your reliable online financial services provider.
 Our mission is to offer accessible and personalized financial solutions to individuals seeking expert advice and support. 
 By using our platform, you agree to adhere to the terms specified in our Privacy Policy and Terms of Service.


        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Your privacy is our top priority. Our Privacy Policy details how we gather, utilize,
         and safeguard your personal and financial information. 
        We uphold rigorous standards in data security, ensuring that your information is handled with the highest confidentiality and care.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        When using CashwayClicks, you agree to our Terms of Service. These guidelines govern the use of our platform, 
        interactions with financial services, and outline the responsibilities of both users and our company.
         Understanding these terms is crucial to ensuring a seamless experience for all our customers.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Our platform connects you with financial experts who provide online consultations. These consultations are designed to offer convenient financial advice, solutions, and guidance, but they do not replace personalized financial planning or in-person consultations.
         Providing accurate and comprehensive information is essential to receiving the best possible financial advice and service.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        CashwayClicks is designed to simplify financial access. You can select a specialist, arrange a consultation, and participate in virtual meetings. Our specialists provide personalized financial advice and solutions tailored to your needs. Please note that urgent financial matters 
        may require immediate attention and should be addressed by contacting appropriate financial institutions or advisors.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2020-2024 cashway+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
