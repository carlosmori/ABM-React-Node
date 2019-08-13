import React, { Component } from 'react'
import axios from 'axios';
import UserList from './components/userList/userList';
import AddUser from './components/addUser/addUser';

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
    axios.get(`http://localhost:3001/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  handleUserSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/users', {
      name: this.state.newUser.firstName,
      lastname: this.state.newUser.lastName,
      email: this.state.newUser.email
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          users : [...this.state.users, response.data]
        })
      })
      .catch((error) => {
        console.log('error');
        console.log(error);
      });
  }
  handleAddUserChange = (event) => {
    this.setState({ newUser: { ...this.state.newUser, [event.target.name]: event.target.value } });
    //this.setState({ newUser: event.target.value });
    console.log('event');
    console.log(event);
  }
  render() {
    return (
      <div>
        <AddUser newUser={this.state.newUser} handleAddUserChange={this.handleAddUserChange} handleUserSubmit={this.handleUserSubmit} />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App
