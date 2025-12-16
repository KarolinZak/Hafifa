import {
  useForm,
  type SubmitErrorHandler,
  type SubmitHandler,
} from "react-hook-form";
import { loginClient, signinClient } from "../api/auth.api";
import TextField from "@mui/material/TextField";
import type { FormFields, FormProps, FormValues } from "./Form.types";
import { FieldColor } from "./Form.types";
import * as S from "./Form.styles";
import { useState, type ChangeEvent } from "react";

const Form: React.FC<FormProps> = ({ formFields }) => {
  const [login, setLogin] = useState(true);
  const [fieldColor, setFieldColor] = useState<FieldColor>(
    FieldColor.PrimaryColor
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (login) loginClient(data);
    else signinClient(data);
  };

  const handleTextFieldChange = (
    element: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    regex: RegExp
  ) => {
    if (regex.test(element.target.value)) {
      setFieldColor(FieldColor.SuccessColor);
    } else {
      setFieldColor(FieldColor.ErrorColor);
    }
  };

  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    window.alert(errors); // TODO: use onError better and validate()

  return (
    <>
      <S.card onSubmit={handleSubmit(onSubmit, onError)}>
        <S.header>{login ? "Login" : "Signup"}</S.header>
        <S.text>Log in to Hafifa school</S.text>
        {formFields.map((formField) => (
          <S.StyledTextField
            label={formField.label}
            color={fieldColor}
            {...register(formField.name, {
                onChange: (e) => {
                  handleTextFieldChange(e, formField.regex)
                },
              })}
          />
        ))}
        {login ?? <S.text sx={{ textAlign: "left" }}>Forgot password?</S.text>}
        <S.formButton type="submit" variant="contained">
          {login ? "Login" : "Signin"}
        </S.formButton>
      </S.card>
      <S.text
        sx={{ textAlign: "center" }}
        onClick={() => setLogin(login ? false : true)}
      >
        {login
          ? "Don't have an account? Sign in"
          : "Already have account? Log in"}
      </S.text>
    </>
  );
};

export default Form;
