import { LOG_IN_SUCCESS, LOGOUT } from "../actions/types";
const initialState = {
  session: {
    name: "",
    token: "",
    userLogged: false
  }
};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      let { token, name } = action.sessionObject;
      token = token.split(" ")[1];
      return {
        ...state,
        session: {
          ...state.session,
          name,
          token,
          userLogged: true
        }
      };
    case LOGOUT:
      return {
        ...state,
        session: {
          ...state.session,
          name: null,
          token: null,
          userLogged: false
        }
      };
    default:
      return state;
  }
}
