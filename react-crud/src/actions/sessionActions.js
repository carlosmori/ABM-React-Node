import { LOGIN, LOGOUT } from "../actions/types.js";
export const logIn = credentials => ({
  type: LOGIN,
  payload: credentials
});
export const logOut = () => ({
  type: LOGOUT
});
