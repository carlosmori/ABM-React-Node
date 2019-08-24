import { all, fork } from "redux-saga/effects";

// import app from './app';
// import github from './github';
import userSaga from "./user-saga";

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([
    fork(userSaga)
    //fork(github),
    //fork(user)
  ]);
}
