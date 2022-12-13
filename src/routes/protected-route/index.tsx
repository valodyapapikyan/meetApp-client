import React, { FC } from 'react';
import { Navigate } from 'react-router';
import useAuth from '../../hooks/use-auth';

type IProtectedRouteTypes = {
  redirectPath: string;
  children: JSX.Element;
};

export const ProtectedRoute: FC<IProtectedRouteTypes> = (
  props: IProtectedRouteTypes
) => {
  const { redirectPath, children } = props;
  const { isLogedIn } = useAuth();

  if (!isLogedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
