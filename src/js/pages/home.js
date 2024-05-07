import "../../styles/index.css";
import "../../styles/styles.css";
import React from "react";
import Navbar from "../components/navbar.js";
import ToDoComponents from "../components/toDoComponents.js";


function Home() {
  return (
    <div className="pageContainer">
      <Navbar />
      <div class="toDoContainer">
        <ToDoComponents />
        <ToDoComponents />
        <ToDoComponents />
      </div>
      
    </div>
  );
}
export default Home;
