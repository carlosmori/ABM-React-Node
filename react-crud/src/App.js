import React, { Component } from "react";
import { Provider } from "react-redux";
import UserList from "./components/userList/userList";
import AddUser from "./components/addUser/addUser";
import store from "./store";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUser: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  }
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* <AddUser newUser={this.state.newUser} handleAddUserChange={this.handleAddUserChange} handleUserSubmit={this.handleUserSubmit} /> */}
          <AddUser />
          <UserList />
        </div>
      </Provider>
    );
  }
}

export default App;
