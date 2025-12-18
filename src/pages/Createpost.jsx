import { useNavigate } from "react-router";
import useAuth from "../hook/useAuth";

export const Createpost = () => {
  const navigate = useNavigate();
  const { sigout } = useAuth();

  const logout = () => {
    sigout(() => navigate("/", { replace: true }));
  };
  return (
    <div className="">
      <h1>Create post</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
};
