import TextField from "@mui/material/TextField";
import * as S from "./Form.styles";
import { useState } from "react";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
import type { FormValues } from "./Form.types";
import { loginClient, signinClient } from "../api/auth.api";



const Form: React.FC = () => {
  const [login, setLogin] = useState(true);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
      if (login) loginClient(data) 
      else signinClient(data)
  } 
  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    console.log(errors)

  return (
    <>
      <S.card onSubmit={handleSubmit(onSubmit, onError)}>
        <S.header>{login ? "Login" : "Signup"}</S.header>
        <S.text>Log in to Hafifa school</S.text>
        <TextField
          required
          id="mailInput"
          label="Mail"
          defaultValue="Mail"
          sx={{ width: "40vh" }}
          {...register("mail")}
        />

        <TextField
          required
          id="passwordInput"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ width: "40vh" }}
          {...register("password")}
        />
        {!login && (
          <>
            <TextField
              required
              id="firstNameInput"
              label="First Name"
              sx={{ width: "40vh" }}
              {...register("firstName")}
            />

            <TextField
              required
              id="lastNameInput"
              label="Last Name"
              sx={{ width: "40vh" }}
              {...register("lastName")}
            />
          </>
        )}
        {login ?? <S.text sx={{ textAlign: "left" }}>Forgot password?</S.text>}
        < S.formButton
          type="submit"
          variant="contained"
        > 
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
