import React, { Component } from 'react'
import axios from 'axios';
import { Provider } from 'react-redux';
import UserList from './components/userList/userList';
import AddUser from './components/addUser/addUser';
import store from './store';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUser: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  }
  componentDidMount() {
  }
  handleUserSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users', {
      name: this.state.newUser.firstName,
      lastname: this.state.newUser.lastName,
      email: this.state.newUser.email
    })
      .then((response) => {
        this.setState({
          users: [...this.state.users, response.data]
        })
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }
  handleAddUserChange = (event) => {
    this.setState({ newUser: { ...this.state.newUser, [event.target.name]: event.target.value } });
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          <AddUser newUser={this.state.newUser} handleAddUserChange={this.handleAddUserChange} handleUserSubmit={this.handleUserSubmit} />
          <UserList />
        </div>
      </Provider>
    )
  }
}

export default App
