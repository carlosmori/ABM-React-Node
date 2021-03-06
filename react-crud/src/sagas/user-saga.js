/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest } from "redux-saga/effects";
import { http } from "../utils/authentication";
import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  ADD_USER_SUCCESS
} from "../actions/types";
import { push } from "connected-react-router";

/**
 * Login
 */
export function* fetchUsers() {
  try {
    const response = yield call(fetchUserAxios);
    //users
    const payload = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "FETCH_USERS_SUCCESS", payload });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
export function* addUser(action) {
  try {
    const response = yield call(addUserAxios, action.payload);
    //users
    const payload = response.data;
    // dispatch a success action to the store with the new dog
    yield put({ type: ADD_USER_SUCCESS, payload });
    yield put(push("/welcome/userList"));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
export function* deleteUser(action) {
  try {
    yield call(deleteUserAxios, action.payload);
    //users
    const payload = action.payload;
    // dispatch a success action to the store with the new dog
    yield put({ type: DELETE_USER_SUCCESS, payload });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
export function* updateUser(action) {
  try {
    yield call(updateUserAxios, action.payload);
    //users
    const payload = action.payload;
    // dispatch a success action to the store with the new dog
    yield put({ type: UPDATE_USER_SUCCESS, payload });
    yield put(push("/welcome/userList"));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
const fetchUserAxios = () => http.get(`/users`);
const addUserAxios = newUser =>
  http.post("/users", {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email
  });
const deleteUserAxios = userId =>
  http.delete("/users", {
    data: {
      id: userId
    }
  });
const updateUserAxios = newUser => {
  http.put("/users", {
    id: newUser.id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email
  });
};

/**
 * User Sagas Watcher
 */
export default function* root() {
  yield all([
    takeLatest(FETCH_USERS, fetchUsers),
    takeLatest(ADD_USER, addUser),
    takeLatest(DELETE_USER, deleteUser),
    takeLatest(UPDATE_USER, updateUser)
  ]);
}
