import { useState, useEffect, useContext, createContext } from "react";
import authenticationService from "../services/authentication.service";

const noop = () => {};

const AuthContext = createContext({ user: null, login: noop, logout: noop });

export const AuthenticationProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user) => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    authenticationService.signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const authUser = authenticationService.getAuthUser();

    if (authUser !== null) {
      setUser(authUser);
      setIsAuthenticated(true);
    }
    console.log("useEffect", authUser);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated }}
      {...props}
    />
  );
};

export default AuthenticationProvider;

export const useAuthentication = () => useContext(AuthContext);
