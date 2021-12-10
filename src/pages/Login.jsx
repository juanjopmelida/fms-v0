import { useState } from "react";
import { withRouter } from "react-router";

import { authenticationService } from "../services/authentication.service";
import { useAuthentication } from "../session/AuthenticationProvider";

export const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = useAuthentication();

  const login = async (e) => {
    e.preventDefault();
    authenticationService
      .signIn(username, password)
      .then((user) => {
        console.log(user);
        auth.login(user);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={login}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default withRouter(Login);
