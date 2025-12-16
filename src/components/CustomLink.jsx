import { Link, useMatch } from "react-router";

export const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  console.log(match);

  return (
    <Link to={to} {...props} className={match ? "active" : ""}>
      {children}
    </Link>
  );
};
