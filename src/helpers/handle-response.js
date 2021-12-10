import { authenticationService } from "../services/authentication.service";

export const handleResponse = (response) => {
  if (!response.status) {
    if ([401, 403].includes(response.status)) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      authenticationService.logout();
    }

    const error = response.data && response.data.resulCode !== 0;
    return Promise.reject(error);
  }

  return response.data;
};
