import { signupClient } from "../api/auth.api";
import { signupFields } from "../../App.types";
import { StyledLink } from "./Signup.styles";
import Form from "../Form/Form";

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
      <div>
        Already have an account?<StyledLink to="/login"> Log in</StyledLink>
      </div>
    </>
  );
};

export default Signup;
