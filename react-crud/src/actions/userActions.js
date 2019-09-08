import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  UPDATE_USER
} from "./types.js";

export const fetchUsers = () => ({ type: FETCH_USERS });

export const addUser = newUser => ({ type: ADD_USER, payload: newUser });

export const deleteUser = userId => ({ type: DELETE_USER, payload: userId });

export const updateUser = newUser => ({
  type: UPDATE_USER,
  payload: newUser
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
