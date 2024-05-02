import Home from "./js/pages/home.js";
import React from "react";
import Login from "./js/pages/login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Login />
      <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
