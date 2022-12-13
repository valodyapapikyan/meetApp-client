import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';

//pages
import Dashboard from '../pages/dashboard';
import UserDashBoard from '../pages/user-dashboard/index';


export const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route
        path="/dashboard/events"
        element={
          <ProtectedRoute redirectPath="/">
              <UserDashBoard />

          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
