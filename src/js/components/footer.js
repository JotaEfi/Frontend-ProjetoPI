import React from "react";
import ProjectLogo from "../../assets/img/monza-logo4.png";
import UnifapLogo from "../../assets/img/logo-unifap.png";

// Assuming ProjectLogo is imported or defined somewhere above this line
// import ProjectLogo from 'path-to-image';

export default function Footer() {
  return (
    <footer className="general_footer">
      <div className="footer_title">
        <h1>Projeto de P.I 24.1</h1>
      </div>
      <div className="footer_colaborators">
        <p>Pessoa_Número 1</p>
        <p>Pessoa_Número 2</p>
        <p>Pessoa_Número 3</p>
        <p>Pessoa_Número 4</p>
        <p>Pessoa_Número 5</p>
        <p>Pessoa_Número 6</p>
        <p>Pessoa_Número 7</p>
      </div>
      <div className="footer_logos">
        <img src={ProjectLogo} alt="" style={{ width: "150px" }} />
        <img src={UnifapLogo} alt="" style={{ width: "150px" }} />
      </div>
    </footer>
  );
}
