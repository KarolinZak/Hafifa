
import { EmailRegex, type FormFields } from "../Types/Form.types";
import type { AppRoute } from "../Types/appTypes";
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login'

export const loginFields: FormFields[] = [
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
  ];

  export const signupFields: FormFields[] = [
  { name: "firstName", label: "First Name", regex: /.+/, required: true },
  { name: "lastName", label: "Last Name", regex: /.+/, required: true },
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
];


export const appRoutes: AppRoute[] = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <></> },
];
