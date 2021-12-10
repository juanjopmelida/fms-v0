import { withRouter } from "react-router-dom";
import { useAuthentication } from "../session/AuthenticationProvider";

export const Home = ({ history }) => {
  const login = () => {
    history.push("/login");
  };

  const { user, isAuthenticated } = useAuthentication();
  const message = isAuthenticated ? `Bienvenido ${user}` : "Bienvenido";

  return (
    <div>
      <h1>{message}</h1>
      <p>Esta página puede ser accedida por todos los usuarios</p>
      {user == null ? (
        <button type="button" onClick={login}>
          Login
        </button>
      ) : null}
    </div>
  );
};

export default withRouter(Home);
