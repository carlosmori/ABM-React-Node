import React, { useEffect, useState } from "react";
import "./addUser.css";
import { addUser, updateUser } from "../../actions/userActions";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    id: undefined,
    firstName: "",
    lastName: "",
    email: ""
  });
  const user = useSelector(state => state.usersReducerState.newUserFromRedux);

  const handleSubmit = event => {
    event.preventDefault();

    user.action === "Add User"
      ? dispatch(addUser(values))
      : dispatch(updateUser(values));
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  useEffect(() => {
    if (user.action === "Update") {
      const { id, firstName, lastName, email } = user;
      setValues({ id, firstName, lastName, email });
    }
  }, [user]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <button
            className="btn btn-success"
            onClick={() => dispatch(push("/welcome/userList"))}
            style={{ float: "right" }}
          >
            User List
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 offset-4">
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control "
                placeholder="User Name"
                value={values.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control "
                placeholder="Last name"
                value={values.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control "
                placeholder="Email address"
                value={values.email}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={handleSubmit}
            >
              {user.action}
            </button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
};

export default AddUser;
