import { useLocation, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";

export const Loginpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { sigin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    sigin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div className="">
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
