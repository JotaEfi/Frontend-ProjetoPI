import Home from "./js/pages/home.js";
import React from "react";
import Login from "./js/pages/login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./js/pages/register.js";
function App() {
  return (
  
    
    
    /* <Register />*/
    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
