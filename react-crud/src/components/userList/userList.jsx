import React, { useEffect } from "react";
import User from "../user/user";
import { fetchUsers, setCurrentUser } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

const UserList = props => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersReducerState.usersFromRedux);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const addUser = () => {
    dispatch(setCurrentUser({ action: "Add User" }));
    dispatch(push("/welcome/addUser"));
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <button className="btn btn-success" onClick={addUser}>
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
              {/* @todo , refactor no se usa index como key. Se usa un objeto del user (id) */}
              {users.map((user, index) => {
                return <User key={index} user={user} history={props.history} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
