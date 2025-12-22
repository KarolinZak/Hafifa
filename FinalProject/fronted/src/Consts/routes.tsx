
import type { AppRoute } from "../Types/appTypes";
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login'
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const routePaths = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  HOME: "/home",
};

export const appRoutes: AppRoute[] = [
  { path: routePaths.LOGIN, element: <Login /> , protected : false},
  { path: routePaths.SIGNUP, element: <Signup /> , protected : false},
  { path: routePaths.HOME, element:  <ProtectedRoute><></></ProtectedRoute>, protected : true },
];


