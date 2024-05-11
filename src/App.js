import Home from "./js/pages/home.js";
import React from "react";
import Login from "./js/pages/login.js";
import { AuthProvider } from "./context/auth.js";
import { AppRouter } from "./routes/routes.js";
function App() {
  return (
  
  
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  
  );
}

export default App;
