import { LOGIN } from "../actions/types.js";
export const logIn = credentials => {
  return { type: LOGIN, payload: credentials };
};
