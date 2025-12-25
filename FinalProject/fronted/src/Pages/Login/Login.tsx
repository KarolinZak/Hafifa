import { loginFields } from "../../Consts/formFeildsConsts";
import { routePaths } from "../../Consts/routesConsts";
import { AuthContext } from "../../Types/authTypes";
import { loginClient } from "../../Service/auth";
import Form from "../../components/Form/Form";
import * as S from "./Login.styles";
import { useContext } from "react";

const Login: React.FC = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null;
  const { setCurrentUser } = auth;
  return (
    <>
      <Form
        handleSubmitClick={(formValues) => loginClient(formValues, setCurrentUser)}
        header={"Login"}
        info={"Login to Hafifa school"}
        formFields={loginFields}
        path={routePaths.HOME}
      ></Form>
      <S.StyledText>
        Don't have an account?<S.StyledLink to={routePaths.SIGNUP}> Sign up</S.StyledLink>
      </S.StyledText>
    </>
  );
};

export default Login;
