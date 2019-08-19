import React, { Component } from 'react'
import { Provider } from 'react-redux';
import UserList from './components/userList/userList';
import AddUser from './components/addUser/addUser';
import store from './store';
import UsersForm from './components/userForm/userForm';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  submit = values => {
    // print the form values to the console
    console.log(values)
  };
  render() {
    return (
      <Provider store={store}>
        <div>
          <UsersForm onSubmit={this.submit} />
          <UserList />
        </div>
      </Provider>
    )
  }
}

export default App
