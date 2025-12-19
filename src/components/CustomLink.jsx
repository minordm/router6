import { Link, useMatch } from "react-router";

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({ path: to, end: to.length === 1 });

  return (
    <Link to={to} {...props} className={match ? "active" : ""}>
      {children}
    </Link>
  );
};
