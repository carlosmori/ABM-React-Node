import React, { Component } from "react";
import User from "../user/user";
import { fetchUsers, setCurrentUser } from "../../actions/userActions";
import { connect } from "react-redux";
import { push } from "connected-react-router";

export class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  addUser = () => {
    this.props.setCurrentUser({ action: "Add User" });
    this.props.push("/welcome/addUser");
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <button className="btn btn-success" onClick={this.addUser}>
              Add User
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.users.map((user, index) => {
                  return (
                    <User
                      key={index}
                      user={user}
                      history={this.props.history}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducerState.usersFromRedux,
  session: state.sessionReducerState.session
});
export default connect(
  mapStateToProps,
  { fetchUsers, setCurrentUser, push }
)(UserList);
