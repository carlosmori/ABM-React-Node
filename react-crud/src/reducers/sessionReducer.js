import { LOG_IN_SUCCESS, LOGOUT } from "../actions/types";
const initialState = {
  session: {
    name: "",
    token: "",
    userLogged: false
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN_SUCCESS:
      let { token, name } = payload;
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
};
