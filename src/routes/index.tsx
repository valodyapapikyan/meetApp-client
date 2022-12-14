import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';

//pages
import Dashboard from '../pages/dashboard';
import UserDashBoard from '../pages/user-dashboard/index';
import CreateEvent from '../pages/create-event';
import RegisterEvent from '../pages/register-event';

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
      <Route
        path="/create-event"
        element={
          <ProtectedRoute redirectPath="/">
            <CreateEvent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register-event/:eventID"
        element={
          <ProtectedRoute redirectPath="/">
            <RegisterEvent />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
