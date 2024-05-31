
import React from "react";
import { AuthProvider } from "./services/authContext.js";


import { AppRouter } from "./routes/routes.js";
function App() {
  return (
  
  
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
   
  
  );
}

export default App;
