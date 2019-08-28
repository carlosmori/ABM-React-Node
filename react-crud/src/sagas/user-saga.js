/**
 * @module Sagas/User
 * @desc User
 */

import { all, call, put, takeLatest, select } from "redux-saga/effects";
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
/**
 * Login
 */
export function* fetchUsers() {
  try {
    const getToken = state => state.sessionReducerState.token;
    // ...
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
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
export function* deleteUser(action) {
  try {
    const response = yield call(deleteUserAxios, action.payload);
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
    const response = yield call(updateUserAxios, action.payload);
    //users
    const payload = action.payload;
    // dispatch a success action to the store with the new dog
    yield put({ type: UPDATE_USER_SUCCESS, payload });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
function fetchUserAxios() {
  return http.get(`/users`);
}
function addUserAxios(newUser) {
  return http.post("http://localhost:3001/users", {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email
  });
}
function deleteUserAxios(userId) {
  return http.delete("http://localhost:3001/users", {
    data: {
      id: userId
    }
  });
}
function updateUserAxios(newUser) {
  return http.put("http://localhost:3001/users", {
    id: newUser.id,
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email
  });
}

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
