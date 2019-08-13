import React, { Component } from 'react'
import axios from 'axios';
import UserList from './components/userList/userList';
import AddUser from './components/addUser/addUser';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3001/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  addUser = () => {
    alert("test")
  }
  render() {
    return (
      <div>
        <AddUser addUser={this.addUser} />
        <UserList users={this.state.users} />
      </div>
    )
  }
}

export default App
