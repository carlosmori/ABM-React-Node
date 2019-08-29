import { LOG_IN_SUCCESS } from "../actions/types";
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
    default:
      return state;
  }
}
