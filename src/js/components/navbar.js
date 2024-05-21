import "../../styles/index.css";
import "../../styles/styles.css";
import "../../styles/queries.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProjectLogo from "../../assets/img/monza-logo4.png";
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
            href="tasks"
            to="/tasks"
            id="tasks"
            className={activeTab === "/" ? "active" : ""}
            onClick={() => handleTabClick("/")}
          >
            Tasks
          </a>
          <a
            href="home"
            to="/home"
            id="home"
            className={activeTab === "/home" ? "active" : ""}
            onClick={() => handleTabClick("/home")}
          >
            Como Funciona?
          </a>
          <div className="nav_user_profile">
            <div className="user_profile_picture">
              <h1>U</h1>
            </div>
            <div className="user_profile_name">
              <p href="">email@usuario.com</p>
            </div>
          </div>
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
