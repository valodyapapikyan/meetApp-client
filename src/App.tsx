import React from 'react';

import './App.css';
import Header from './components/Header/index';
import { AuthProvider } from './hooks/use-auth/index';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';
function App() {
  return (
    <div className="root-container">
      <BrowserRouter>
        <AuthProvider>
          <>
            <Header />
            <MainRoutes />
          </>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
