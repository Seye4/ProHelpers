import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/Input";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("auth/login", data);

      console.log(response);

      store.dispatch(loginUser(response.data));

      // store.dispatch(
      //   loginUser({
      //     jwt: "lorem45",
      //     user: {
      //       id: 11,
      //       username: "Akins",
      //       emails: "akins@aear.com",
      //       provider: "local",
      //       confirmed: true,
      //       blocked: false,
      //       createdAt: " 1334i ",
      //       updatedAt: "828282",
      //     },
      //   })
      // );
      toast.success("login successful");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      // const response = await customFetch.post("/db/data.json", {
      //   identifier: "test@test.com",
      //   password: 'secret'
      // })

      dispatch(
        loginUser({
          jwt: "lorem45",
          user: {
            id: 12,
            name: "Demo",
            emails: "test@test.com",
            provider: "local",
            confirmed: true,
            blocked: false,
            createdAt: " 1334i ",
            updatedAt: "828282",
          },
        })
      );
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="section">
      <Form className="form" method="post">
        <h4>Login</h4>
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="Passwort" name="password" />

        <SubmitBtn text="login" />

        <button
          className="btn guest-btn"
          type="button"
          onClick={loginAsGuestUser}
        >
          Gastbenutzer
        </button>
        <p className="signIn-options">
          Not a member a yet <Link to="/register"> Registrieren </Link>{" "}
        </p>
      </Form>
    </div>
  );
};

export default Login;
