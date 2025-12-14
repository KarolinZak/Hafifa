import TextField from "@mui/material/TextField";
import * as S from "./Form.styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";
import type { FormValues } from "./Form.types";



const Login: React.FC = () => {
  const [login, setLogin] = useState(true);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
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
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "40vh", height: "40px", bgcolor: "#d55c5c" }}
        >
          {login ? "Login" : "Signin"}
        </Button>
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

export default Login;
