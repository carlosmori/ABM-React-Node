// reducers.js
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import sessionReducer from "./sessionReducer";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    usersReducerState: userReducer,
    sessionReducerState: sessionReducer
  });
export default createRootReducer;
