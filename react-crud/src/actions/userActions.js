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
export const addUser = () => dispatch => {
  axios.post('http://localhost:3001/users', {
    name: 'name.redux',
    lastname: 'lastname-redux',
    email: 'email-redux'
    // name: this.state.newUser.firstName,
    // lastname: this.state.newUser.lastName,
    // email: this.state.newUser.email
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