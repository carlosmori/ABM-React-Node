import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  UPDATE_USER,
  FETCH_USERS_SUCCESS,
  ADD_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS
} from "../actions/types";

const initialState = {
  newUserFromRedux: {
    action: "",
    firstName: "",
    lastName: "",
    email: ""
  },
  usersFromRedux: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersFromRedux: action.payload
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        usersFromRedux: [...state.usersFromRedux, action.payload]
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        usersFromRedux: [...state.usersFromRedux].filter(
          user => user.id !== action.payload
        )
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        newUserFromRedux: action.payload
      };
    case UPDATE_USER_SUCCESS:
      let { usersFromRedux } = state;
      const oldUserIndex = usersFromRedux.findIndex(
        user => user.id === action.payload.id
      );
      usersFromRedux[oldUserIndex] = action.payload;
      return {
        ...state,
        usersFromRedux: [...usersFromRedux]
      };
    // case UPDATE_USER:
    //   let { usersFromRedux } = state;
    //   const oldUserIndex = usersFromRedux.findIndex(
    //     user => user.id === action.payload.id
    //   );
    //   usersFromRedux[oldUserIndex] = action.payload;
    //   return {
    //     ...state,
    //     usersFromRedux: [...usersFromRedux]
    //   };
    // case FETCH_USERS:
    //   return {
    //     ...state,
    //     usersFromRedux: action.payload
    //   };
    // case ADD_USER:
    //   return {
    //     ...state,
    //     usersFromRedux: [...state.usersFromRedux, action.payload]
    //   };
    // case DELETE_USER:
    //   return {
    //     ...state,
    //     usersFromRedux: [...state.usersFromRedux].filter(
    //       user => user.id !== action.payload
    //     )
    //   };
    default:
      return state;
  }
}
