import { combineReducers } from "redux";
import userReducer from "./userReducer";
import sessionReducer from "./sessionReducer";

export default combineReducers({
  usersReducerState: userReducer,
  sessionReducerState: sessionReducer
});
