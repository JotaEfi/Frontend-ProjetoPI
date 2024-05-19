import Login from "../js/pages/login"
import Register from "../js/pages/register"
import Home from "../js/pages/home"
import Tasks from "../js/pages/tasks";
import About from "../js/pages/about";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/" element={<Register />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/home" element={<Home />} />
                <Route path='/about' element={<About />} />

            </Routes>
        
        </BrowserRouter>
    )
}