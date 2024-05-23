import Login from "../js/pages/login"
import Register from "../js/pages/register"
import Home from "../js/pages/home"
import Tasks from "../js/pages/tasks";
import About from "../js/pages/about";


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export const AppRouter = () => {
    const isAuthenticated = localStorage.getItem('jwt');
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/" element={<Register />} />
                <Route path="/projects/:projectId/tasks" element={isAuthenticated ? <Tasks /> : <Navigate to="/auth/login" replace />} />
                <Route path='/about' element={isAuthenticated ? <About /> : <Navigate to="/auth/login" replace />} />
                <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/auth/login" replace />} />

            </Routes>
        
        </BrowserRouter>
    )
}