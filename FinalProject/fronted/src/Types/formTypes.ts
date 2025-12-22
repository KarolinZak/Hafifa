export interface FormValues {
  mail?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
};

export interface FormFields {
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

export interface FormProps {
  handleSubmitClick : (data: FormValues) => void;
  header: string;
  info: string; 
  formFields: FormFields[];
  path: string;
};

