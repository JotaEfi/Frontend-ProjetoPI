import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(!!localStorage.getItem('jwt'));

    return (
        <AuthContext.Provider value={{ signed, setSigned }}>
            {children}
        </AuthContext.Provider>
    );
};
//FAZER ISSO (PRIVAR ROTA QUANDO USER NAO LOGADO)