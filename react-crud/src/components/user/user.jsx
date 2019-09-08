import React from "react";
import { deleteUser, setCurrentUser } from "../../actions/userActions";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import "./user.css";

const User = props => {
  const dispatch = useDispatch();

  const updateUser = () => {
    dispatch(setCurrentUser({ ...props.user, action: "Update" }));
    dispatch(push("/welcome/addUser"));
  };
  return (
    <tr>
      <th scope="row">{props.user.id}</th>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.email}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteUser(props.user.id))}
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
