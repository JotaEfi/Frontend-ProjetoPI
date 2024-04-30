import "../../styles/index.css";
import "../../styles/styles.css";
import "../../styles/queries.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProjectLogo from "../../assets/img/monza-logo.png";

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  return (
    <nav className="nav-bar">
      <ul>
        <button>
          <img src={ProjectLogo} alt="" />
        </button>
        <a
          href="home"
          to="/"
          id="home"
          className={activeTab === "/" ? "active" : ""}
          onClick={() => handleTabClick("/")}
        >
          Página Inicial
        </a>
        <a
          href="loja"
          to="/loja"
          id="loja"
          className={activeTab === "/loja" ? "active" : ""}
          onClick={() => handleTabClick("/loja")}
        >
          Loja
        </a>{" "}
        <a
          href="funciona"
          to="/funciona"
          id="funciona"
          className={activeTab === "/funciona" ? "active" : ""}
          onClick={() => handleTabClick("/funciona")}
        >
          Como Funciona?
        </a>
      </ul>
    </nav>
  );
};
export default Navbar;
