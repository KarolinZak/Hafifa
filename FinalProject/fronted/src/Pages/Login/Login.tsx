import { loginFields } from "../../Consts/formFeildsConsts";
import { loginClient } from "../../Service/auth";
import * as S from "./Login.styles";
import Form from "../../components/Form/Form";
import { routePaths } from "../../Consts/routesConsts";

const Login: React.FC = () => {
  return (
    <>
      <Form
        handleSubmitClick={loginClient}
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
