import "../../styles/index.css";
import "../../styles/styles.css";
import "../../styles/queries.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProjectLogo from "../../assets/img/monza-logo4.png";
import { IoIosSearch } from "react-icons/io";

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
    <nav className="nav-bar inter-font900">
      <button>
        <img src={ProjectLogo} alt="" style={{ width: "150px" }} />
      </button>
      <ul>
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

      <div class="box">
        <IoIosSearch className="search_icon" />
        <form name="search">
          <input
            type="text"
            class="input"
            name="txt"
            onmouseout="this.value = ''; this.blur();"
          />
        </form>
        <i class="fas fa-search"></i>
      </div>
    </nav>
  );
};
export default Navbar;
