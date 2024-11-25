// getters
export const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

// setters
export const setAccessToken = (token: string) => {
  return localStorage.setItem("access_token", token);
};

export const setRefreshToken = (token: string) => {
  return localStorage.setItem("refresh_token", token);
};
