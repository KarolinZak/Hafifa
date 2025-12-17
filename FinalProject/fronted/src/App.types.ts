import { EmailRegex, type FormFields } from "./components/Form/Form.types";

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

// TODO: rename file to consts