import { routePaths } from '../../Consts/routesConsts';
import { Navigate } from 'react-router-dom';
import type { JSX } from 'react';

type ProtectedRouteProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  if (!isLoggedIn) {
    return <Navigate to={routePaths.LOGIN} replace />;
  }

  return children;
};

export default ProtectedRoute;
