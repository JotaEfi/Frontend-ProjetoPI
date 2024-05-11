import React, { useEffect } from "react";

import { createContext } from "react";

import { useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        const loadingStorageData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");

            if (storageToken && storageUser) {
                setUser(storageUser);
            }
        };
        loadingStorageData();
    }, []);

    const signIn = async (email, password) => {
        try {
            const response = await api.post("/auth/login", {
                email,
                password,
            });

            const { token, user } = response.data;

            setUser(response.data.user);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            localStorage.setItem("@Auth:token", token);
            localStorage.setItem("@Auth:user", JSON.stringify(user));
            localStorage.setItem()
        } catch (error) {
            alert("Erro ao fazer login. Por favor, verifique suas credenciais.");
            console.error("Erro de login:", error);
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            signed: !!user,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
}