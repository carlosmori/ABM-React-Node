/**
 * @module Sagas/Session
 * @desc Session
 */

import { all, call, put, takeLatest } from "redux-saga/effects";
import { http, setAuthorization } from "../utils/authentication";

import { push } from "react-router-redux";

import { LOGIN, LOG_IN_SUCCESS } from "../actions/types";

/**
 * Login
 */
export function* logIn(action) {
  try {
    const response = yield call(logInAxios, action.payload);
    //users
    const { token } = response.data;
    const { name } = action.payload;
    let sessionObject = {
      name,
      token
    };

    // dispatch a success action to the store with the new dog
    setAuthorization(token);
    yield put({ type: LOG_IN_SUCCESS, sessionObject });
    yield put(push("/welcome/userList"));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}
function logInAxios(credentials) {
  const { name, password } = credentials;
  return http.post("/login", {
    name,
    password
  });
}

/**
 * User Sagas Watcher
 */
export default function* root() {
  yield all([takeLatest(LOGIN, logIn)]);
}
