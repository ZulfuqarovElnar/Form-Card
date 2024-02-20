import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './context';
import Routes from './routes';


function App() {
  return (

      <AppContextProvider>
        <RouterProvider router={Routes} />
      </AppContextProvider>

  );
}

export default App;

