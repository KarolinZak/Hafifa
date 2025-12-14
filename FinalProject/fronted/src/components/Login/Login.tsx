import TextField from "@mui/material/TextField";
import * as S from "./Login.styles";
import Button from "@mui/material/Button";

const Login: React.FC = () => {
  return (
    <>
      <S.card>
        <S.header>Login</S.header>
        <S.text>Log in to Hafifa school</S.text>
        <TextField
          required
          id="mailInput"
          label="Mail"
          defaultValue="Mail"
          sx={{width: "40vh"}}
        />
        <TextField
          required
          id="passwordInput"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{width: "40vh"}}
        />
        <S.text sx={{textAlign: "left"}}>Forgot password?</S.text>
        <Button variant="contained" sx={{width: "40vh", height: "40px", bgcolor: "#d55c5c"}}>Login</Button>
      </S.card>
      <S.text sx={{textAlign: "center"}}>Don't have an account? Sign in</S.text>
    </>
  );
};

export default Login;
