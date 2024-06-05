import React from "react";
import Navbar from "../components/navbar.js";
import backgroundImage from "../../assets/img/site-background.png";
import Footer from "../components/footer.js";
import ProjectLogo from "../../assets/logo/monza-logo.jpg";

export default function About() {
  return (
    <div className="home pageContainer">
      <div className="home_container">
        <div className="text_project_explanation">
          <img src={ProjectLogo} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
