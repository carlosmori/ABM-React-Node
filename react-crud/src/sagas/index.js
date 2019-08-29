import { all, fork } from "redux-saga/effects";
import userSaga from "./user-saga";
import sessionSaga from "./session-saga";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(sessionSaga)]);
}
