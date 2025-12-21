import { loginFields } from "../../Consts/formFeilds";
import { loginClient } from "../../Api/auth.api";
import * as S from "./Login.styles";
import Form from "../../components/Form/Form";

const Login: React.FC = () => {
  return (
    <>
      <Form
        handleSubmitClick={loginClient}
        header={"Login"}
        info={"Login to Hafifa school"}
        formFields={loginFields}
        path={"/home"}
      ></Form>
      <S.StyledText>
        Don't have an account?<S.StyledLink to="/signup"> Sign up</S.StyledLink>
      </S.StyledText>
    </>
  );
};

export default Login;
