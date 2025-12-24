import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { routePaths } from '../../Consts/routesConsts';

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
