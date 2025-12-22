import type { FormFields } from "../Types/formTypes";

export const EmailRegex: RegExp = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginFields: FormFields[] = [
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
];

export const signupFields: FormFields[] = [
  {
    name: "firstName",
    label: "First Name",
    regex: /^([A-Za-z]+|[\u0590-\u05fe]+)$/,
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    regex:/^([A-Za-z]+|[\u0590-\u05fe]+)$/,
    required: true,
  },
  { name: "mail", label: "Email", regex: EmailRegex, required: true },
  { name: "password", label: "Password", regex: /.+/, required: true },
];
