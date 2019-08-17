import { FETCH_USERS, ADD_USER } from './types.js';
import axios from 'axios';

export const fetchUsers = () => dispatch => {
  axios.get(`http://localhost:3001/users`)
    .then(res =>
      dispatch({
        type: FETCH_USERS,
        payload: res.data
      })
    );
}
export const addUser = (newUser) => dispatch => {
  axios.post('http://localhost:3001/users', {
    name: newUser.firstName,
    lastname: newUser.lastName,
    email: newUser.email
  })
    .then((response) => {
      dispatch({
        type: ADD_USER,
        payload: response.data
      })
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
    });
}