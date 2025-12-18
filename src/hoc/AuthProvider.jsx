import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const sigin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const sigout = (cb) => {
    setUser(null);
    cb();
  };

  const value = { user, sigin, sigout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
