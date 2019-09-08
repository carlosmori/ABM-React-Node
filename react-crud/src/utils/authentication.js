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
  response => response,
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
const unSetAuthorization = () =>
  localStorage.removeItem(AUTHORIZATION_KEY_NAME);

// @todo isLoggedIn()
const isLoggedIn = () => localStorage.getItem(AUTHORIZATION_KEY_NAME);

export { http, setAuthorization, unSetAuthorization, isLoggedIn };
