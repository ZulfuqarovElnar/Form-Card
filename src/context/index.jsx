import React, { createContext, useContext} from 'react';

const AppContext = createContext();

export function AppContextProvider({ children }) {



    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
