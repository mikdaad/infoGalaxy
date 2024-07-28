import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
