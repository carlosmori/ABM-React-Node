import { FETCH_USERS, ADD_USER, DELETE_USER } from '../actions/types';

const initialState = {
    newUserFromRedux: {},
    usersFromRedux: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                usersFromRedux: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                newUserFromRedux: action.payload,
                usersFromRedux: [...state.usersFromRedux, action.payload]
            };
        case DELETE_USER:
            return {
                ...state,
                usersFromRedux: [...state.usersFromRedux].filter(user => user.id != action.payload)
            };
        default:
            return state;
    }
}
