import React from 'react';

import './App.css';
import Header from './components/Header/index';
import { AuthProvider } from './contexts/auth';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';
import { EventProvider } from './contexts/events';

function App() {
  return (
    <div className="root-container">
      <BrowserRouter>
        <AuthProvider>
          <>
            <EventProvider>
              <>
                <Header />
                <MainRoutes />
              </>
            </EventProvider>
          </>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
