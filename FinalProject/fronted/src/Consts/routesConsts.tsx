import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import type { AppRoute, MenuRoutes } from "../Types/appTypes";
import PeopleIcon from "@mui/icons-material/People";
import CreateIcon from "@mui/icons-material/Create";
import ClassIcon from "@mui/icons-material/Class";
import Classes from "../Pages/ClassPage/Class";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";

export const routePaths = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  HOME: "/home",
  STUDENTS: "/students",
  CREATE: "/create",
};

export const appRoutes: AppRoute[] = [
  { path: routePaths.LOGIN, element: <Login />, protected: false },
  { path: routePaths.SIGNUP, element: <Signup />, protected: false },
  {
    path: routePaths.HOME,
    element: (
      <ProtectedRoute>
        <Classes />
      </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: routePaths.STUDENTS,
    element: (
      <ProtectedRoute>
        <></>
      </ProtectedRoute>
    ),
    protected: true,
  },
  {
    path: routePaths.CREATE,
    element: (
      <ProtectedRoute>
        <></>
      </ProtectedRoute>
    ),
    protected: true,
  },
];

export const menuRoutes: MenuRoutes[] = [
  {
    routeName: routePaths.HOME,
    routeIcon: ClassIcon,
  },
  {
    routeName: routePaths.STUDENTS,
    routeIcon: PeopleIcon,
  },
  {
    routeName: routePaths.CREATE,
    routeIcon: CreateIcon,
  },
];
