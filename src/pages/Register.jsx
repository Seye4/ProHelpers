import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("auth/register", data);

    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error.message);

    const errorMessage =
      error?.response?.data?.error?.message ||
      "Please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <div className="section">
      <Form className="form" method="post">
        <h4>Registrieren</h4>
        <FormInput type="text" label="Benutzername" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="Passwort" name="password" />
        <SubmitBtn text="Registrieren" />
        <button className="btn guest-btn">Gastbenutzer</button>
        <p className="signIn-options">
          Already a member <Link to="/login"> Login </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default Register;
