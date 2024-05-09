import Tasks from "./js/pages/tasks.js";
import React from "react";
import Home from "./js/pages/home.js";
import Login from "./js/pages/login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./js/pages/register.js";
function App() {
  return (
    /* <Register />*/

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
