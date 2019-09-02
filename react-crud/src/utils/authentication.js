import axios from "axios";
const AUTHORIZATION_KEY_NAME = "Token";

const http = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      return Promise.reject("Email or Password invalid");
    } else {
      return Promise.reject(error);
    }
  }
);

const setAuthorization = authorization => {
  if (authorization) {
    http.defaults.headers.common["Authorization"] = authorization;
    localStorage.setItem(AUTHORIZATION_KEY_NAME, authorization);
  }
};
const unSetAuthorization = authorization => {
  localStorage.removeItem(AUTHORIZATION_KEY_NAME);
};

const getToken = () => {
  return localStorage.getItem(AUTHORIZATION_KEY_NAME);
  // return userLogged ? true : false;
};

export {
  http,
  // getAuthorization,
  setAuthorization,
  unSetAuthorization,
  getToken
  // setUrlFrom,
  // redirectAfterLogin,
  // redirectToLogin,
  // transformObjectToQueryString,
};
