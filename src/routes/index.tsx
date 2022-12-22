import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './protected-route';

//pages
import Dashboard from '../pages/dashboard';
import UserDashBoard from '../pages/user-dashboard/index';
import CreateEvent from '../pages/create-event';
import RegisterEvent from '../pages/register-event';
import EventInfo from "../pages/event-ino";


type IWithAuth = {
  isProtected: boolean | undefined,
  Component: any //TODO use JSX element or ...
};

const routes = [
  { component: Dashboard, index: true },
  { path: '/dashboard/events',  component: UserDashBoard, isProtected: true },
  { path: '/create-event', component: CreateEvent, isProtected: true },
  {
    path: '/register-event/:eventID',
    component: RegisterEvent,
    isProtected: true,
  },
  {
    path: '/event/:eventID',
    component: EventInfo,
    isProtected: false,
  },
];

const withAuth = (props: IWithAuth) => {
  const { Component, isProtected } = props;

  if (isProtected) {
    return (
      <ProtectedRoute>
        <Component />
      </ProtectedRoute>
    );
  }
  return <Component/>;
};

export const MainRoutes = () => {
  return (
    <Routes>
      {routes.map(
        ({ component: Component, path, isProtected, index = false }) => {
          return (
            <Route
              key={uuidv4()}
              index={index}
              path={path}
              element={withAuth({ Component, isProtected })}
            />
          );
        }
      )}
    </Routes>
  );
};
