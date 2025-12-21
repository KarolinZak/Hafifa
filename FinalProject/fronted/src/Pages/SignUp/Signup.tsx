import { signupClient } from "../../Api/auth.api";
import { signupFields } from "../../Consts/formFeilds";
import Form from "../../components/Form/Form";
import * as S from "./Signup.styles";

const Signup: React.FC = () => { 
  return (
    <>
      <Form
        handleSubmitClick={signupClient}
        header={"Signup"}
        info={"Signup to Hafifa school"}
        formFields={signupFields}
        path={"/login"}
      ></Form>
      <S.StyledText>
        Already have an account?<S.StyledLink to="/login"> Log in</S.StyledLink>
      </S.StyledText>
    </>
  );
};

export default Signup;
