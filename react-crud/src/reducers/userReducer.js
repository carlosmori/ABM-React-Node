import {
  SET_CURRENT_USER,
  FETCH_USERS_SUCCESS,
  ADD_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  UPDATE_USER_SUCCESS
} from "../actions/types";

const initialState = {
  //Igualar a null a ver que pasa
  newUserFromRedux: {
    action: null,
    firstName: null,
    lastName: null,
    email: null
  },
  usersFromRedux: []
};
//refactorear a arrow function
//export default (state = initialState, action) => {

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        usersFromRedux: payload
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        usersFromRedux: [...state.usersFromRedux, payload]
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        usersFromRedux: [...state.usersFromRedux].filter(
          user => user.id !== payload
        )
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        newUserFromRedux: payload
      };
    case UPDATE_USER_SUCCESS:
      let { usersFromRedux } = state;
      const oldUserIndex = usersFromRedux.findIndex(
        user => user.id === payload.id
      );
      usersFromRedux[oldUserIndex] = payload;
      return {
        ...state,
        usersFromRedux: [...usersFromRedux]
      };
    default:
      return state;
  }
}
