import { signupClient } from "../../Api/auth.api";
import { signupFields } from "../../Consts/formFeilds";
import { StyledLink } from "./Signup.styles";
import Form from "../../components/Form/Form";

const Signup: React.FC = () => { 
  // TODO: wrap signupClient with try catch which will show error message on form, same for login
  return (
    <>
      <Form
        handleSubmitClick={signupClient}
        header={"Signup"}
        info={"Signup to Hafifa school"}
        formFields={signupFields}
        path={"/login"}
      ></Form>
      <div>
        Already have an account?<StyledLink to="/login"> Log in</StyledLink>
      </div>
    </>
  );
};

export default Signup;
