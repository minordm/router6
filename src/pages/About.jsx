import { Link, Outlet } from "react-router";

export const About = () => {
  return (
    <div className="">
      <h1>About us</h1>
      <p>This is a demo website about React-router-dom lib</p>

      <ul>
        <li>
          <Link to="contact">Our contact</Link>
        </li>
        <li>
          <Link to="team">Our team</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
