import { LOGIN, LOGOUT } from "../actions/types.js";
export const logIn = credentials => {
  return { type: LOGIN, payload: credentials };
};
export const logOut = () => {
  return { type: LOGOUT };
};
