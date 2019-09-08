import React from "react";
import { deleteUser, setCurrentUser } from "../../actions/userActions";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import "./user.css";

const User = props => {
  const { user } = props;
  const { firstName, lastName, email, id } = user;
  const dispatch = useDispatch();

  const updateUser = () => {
    dispatch(setCurrentUser({ ...user, action: "Update" }));
    dispatch(push("/welcome/addUser"));
  };
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteUser(id))}
        >
          Delete
        </button>
        <button type="button" className="btn btn-info" onClick={updateUser}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default User;
