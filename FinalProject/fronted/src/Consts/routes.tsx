
import type { AppRoute } from "../Types/appTypes";
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login'
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const appRoutes: AppRoute[] = [
  { path: "/login", element: <Login /> , protected : false},
  { path: "/signup", element: <Signup /> , protected : false},
  { path: "/home", element:  <ProtectedRoute><></></ProtectedRoute>, protected : true },
];
