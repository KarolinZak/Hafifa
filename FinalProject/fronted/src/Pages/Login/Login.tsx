
import { loginFields } from "../../Consts/formFeilds";
import { loginClient } from "../../Api/auth.api";
import { StyledLink } from "./Login.styles";
import Form from "../../components/Form/Form";




const Login: React.FC = () => {
 
 
  return (
    <>
      <Form handleSubmitClick={loginClient}  header={"Login"} info={"Login to Hafifa school"} formFields={loginFields} path={"/home"}></Form>
      <div>Don't have an account?<StyledLink to="/signup"> Sign up</StyledLink></div>
    </>
  );
};

export default Login;
