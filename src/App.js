import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/Map";
import PrivateRoute from "./layouts/PrivateRoute";
import * as ROUTES from "./constants/routes";
import AuthenticationProvider from "./session/AuthenticationProvider";

const App = () => {
  return (
    <Router>
      <AuthenticationProvider>
        <div>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
            <PrivateRoute path={ROUTES.MAP} component={Map} />
          </Switch>
        </div>
      </AuthenticationProvider>
    </Router>
  );
};

export default App;
