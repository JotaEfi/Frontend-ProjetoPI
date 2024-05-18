import "../../styles/index.css";
import "../../styles/styles.css";
import "../../styles/queries.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProjectLogo from "../../assets/img/monza-logo4.png"
// import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:621520092.

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
      <div className="nav_container">
        <button>
          <a href="home" to="/" id="home">
            <img src={ProjectLogo} alt="" style={{ width: "150px" }} />
          </a>
        </button>
        <ul>
          <a
            href="home"
            to="/"
            id="home"
            className={activeTab === "/" ? "active" : ""}
            onClick={() => handleTabClick("/")}
          >
            Recent
          </a>
          <a
            href="home"
            to="/"
            id="home"
            className={activeTab === "/" ? "active" : ""}
            onClick={() => handleTabClick("/")}
          >
            Workspaces
          </a>
          <a
            href="loja"
            to="/loja"
            id="loja"
            className={activeTab === "/loja" ? "active" : ""}
            onClick={() => handleTabClick("/loja")}
          >
            Como Funciona?
          </a>{" "}
          <a
            href="/auth/login"
            to="/auth/login"
            id="login"
            className={activeTab === "/auth/login" ? "active" : ""}
            onClick={() => handleTabClick("/auth/login")}
          >
            Sair
          </a>
        </ul>

     
      </div>
    </nav>
  );
};
export default Navbar;
