import "../../styles/index.css";
import "../../styles/styles.css";
import "../../styles/queries.css";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProjectLogo from "../../assets/img/monza-logo4.png";
import { api } from "../../services/api";
// import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
// Suggested code may be subject to a license. Learn more: ~LicenseLog:621520092.

const Navbar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const userId = localStorage.getItem("userId");
  const [email, setEmail] = useState("")


  const getEmail = async () => {
    try {
      const response = await api.get(`/users/${userId}`);
      setEmail(response.data.email); // Assuming email is a property within response.data
    } catch (error) {
      console.error('Error fetching email:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };
  
  useEffect(() => {
    getEmail(); // Call getEmail on component mount or when userId changes
  }, [userId]); 
  const handleLogout = (path) => {
    localStorage.removeItem('jwt'); 
    localStorage.removeItem('projects')
    localStorage.removeItem('tasks')
    setActiveTab(path);
  };

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
            to="/home"
      
            className={activeTab === "/" ? "active" : ""}
            onClick={() => handleTabClick("/home")}
          >
            Home
          </a>
          <a
            href="projects"
            to="/projects"
      
            className={activeTab === "/" ? "active" : ""}
            onClick={() => handleTabClick("/projects")}
          >
            Projetos
          </a>
          <a
            href="about"
            to="/about"
   
            className={activeTab === "/about" ? "active" : ""}
            onClick={() => handleTabClick("/about")}
          >
            Sobre
          </a>
          <div className="nav_user_profile">
            <div className="user_profile_picture">
              <h1>U</h1>
            </div>
            <div className="user_profile_name">
            <p>{email}</p>
            </div>
          </div>
          <a
            href="/auth/login"
            to="/auth/login"
            id="login"
            className={activeTab === "/auth/login" ? "active" : ""}
            onClick={() => handleLogout("/auth/login")}
          >
            Sair
          </a>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
