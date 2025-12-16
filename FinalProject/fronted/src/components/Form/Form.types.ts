export type FormValues = {
  mail?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
};

export type FormFields = {
  name: keyof FormValues;
  required : boolean;
  label: string;
  regex: RegExp;
}

export enum FieldColor {
  PrimaryColor = 'primary',
  SuccessColor = 'success',
  ErrorColor = 'error',
}

export type FormProps = {
  formFields: FormFields[];
};

export const EmailRegex: RegExp =
  /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
