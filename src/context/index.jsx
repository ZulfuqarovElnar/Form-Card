// AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppContextProvider({ children }) {
    const [formData, setFormData] = useState(null); 

    return (
        <AppContext.Provider value={{ formData, setFormData }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
