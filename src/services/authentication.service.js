import axios from "axios";
import { handleResponse } from "../helpers/handle-response";

class AuthenticationService {
  constructor() {
    this.getAuthUser = this.getAuthUser.bind(this);
    this.getToken = this.getToken.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  getAuthUser = () => localStorage.getItem("user");

  getToken = () => localStorage.getItem("token");

  isAuthenticated = () => this.getAuthUser() !== null;

  signIn = (username, password) => {
    return new Promise((resolve, reject) => {
      console.log("autenticando", process.env.REACT_APP_API_URL);
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/security/authentication/login`,
          { username, password },
        )
        .then(handleResponse)
        .then((data) => {
          localStorage.setItem("token", JSON.stringify(data));
          localStorage.setItem("user", JSON.stringify(username));

          resolve(username);
        })
        .catch((err) => reject(null));
    });
  };

  signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
}

const authenticationService = new AuthenticationService();
export default authenticationService;
