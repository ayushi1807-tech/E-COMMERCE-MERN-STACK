import React, { createContext } from 'react';

export const AuthDataContext = createContext();

function AuthContext({ children }) {
    let serverurl = "http://localhost:8000";

    const value = {
        serverurl,  
    }
    return (
        <div>
            <AuthDataContext.Provider value={value}>
                {children}
            </AuthDataContext.Provider>
        </div>
    );
}

export default AuthContext
