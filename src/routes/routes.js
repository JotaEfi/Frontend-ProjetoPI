import Login from "../js/pages/login"
import Register from "../js/pages/register"
import Home from "../js/pages/home"

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        
        </BrowserRouter>
    )
}