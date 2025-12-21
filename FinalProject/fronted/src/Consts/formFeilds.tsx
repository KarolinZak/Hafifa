import { EmailRegex, type FormFields } from "../Types/formTypes";

export const loginFields: FormFields[] = [
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
];

export const signupFields: FormFields[] = [
  { name: "firstName", label: "First Name", regex: /^[A-Za-z]+$/, required: true },
  { name: "lastName", label: "Last Name", regex: /^[A-Za-z]+$/, required: true },
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
];
