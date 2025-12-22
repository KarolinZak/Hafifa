import { signupClient } from "../../Service/auth";
import { signupFields } from "../../Consts/formFeilds";
import Form from "../../components/Form/Form";
import * as S from "./Signup.styles";
import { routePaths } from "../../Consts/routes";

const Signup: React.FC = () => { 
  return (
    <>
      <Form
        handleSubmitClick={signupClient}
        header={"Signup"}
        info={"Signup to Hafifa school"}
        formFields={signupFields}
        path={routePaths.LOGIN}
      ></Form>
      <S.StyledText>
        Already have an account?<S.StyledLink to={routePaths.LOGIN}> Log in</S.StyledLink>
      </S.StyledText>
    </>
  );
};

export default Signup;
