

import { createContext } from "react";
import { api } from "../services/api";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const signIn = async (email, password) => {
        try {
            await api
                .get("/auth/login", {
                    headers: {
                        Authorization: "Basic " + btoa(email + ":" + password),
                    },
                })
                .then((response) => {
                    const jwt = response.headers['authorization'];
                    localStorage.setItem('jwt', jwt);
                });
        } catch (error) {
            alert(
                "Erro ao fazer login. Por favor, verifique suas credenciais."
            );
            console.error("Erro de login:", error);
        }
    };
    
    return (
        <AuthContext.Provider value={{
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
}