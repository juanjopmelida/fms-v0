import { Route } from "react-router-dom";

import Login from "../pages/Login";
import { useAuthentication } from "../session/AuthenticationProvider";

export const PrivateRoute = ({ component, ...options }) => {
  const { isAuthenticated } = useAuthentication();

  return isAuthenticated ? (
    <Route {...options} component={component} />
  ) : (
    <Login />
  );
};

export default PrivateRoute;
