import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  UPDATE_USER
} from "./types.js";
import axios from "axios";

export const fetchUsers = () => dispatch => {
  axios.get(`http://localhost:3001/users`).then(res =>
    dispatch({
      type: FETCH_USERS,
      payload: res.data
    })
  );
};
export const addUser = newUser => dispatch => {
  axios
    .post("http://localhost:3001/users", {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email
    })
    .then(response => {
      dispatch({
        type: ADD_USER,
        payload: response.data
      });
    })
    .catch(error => {
      console.log("error");
      console.log(error);
    });
};
export const deleteUser = userId => dispatch => {
  axios
    .delete("http://localhost:3001/users", {
      data: {
        id: userId
      }
    })
    .then(response => {
      dispatch({
        type: DELETE_USER,
        payload: userId
      });
    })
    .catch(error => {
      console.log("error");
      console.log(error);
    });
};
export const setCurrentUser = user => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: user
  });
};

export const updateUser = newUser => dispatch => {
  axios
    .put("http://localhost:3001/users", {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email
    })
    .then(response => {
      dispatch({
        type: UPDATE_USER,
        payload: newUser
      });
    })
    .catch(error => {
      console.log("error");
      console.log(error);
    });
};
