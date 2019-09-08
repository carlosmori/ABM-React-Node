import React, { useState, useEffect } from "react";
import "./login.scss";
import { logIn } from "../../actions/sessionActions.js";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { getToken } from "../../utils/authentication";

const Login = () => {
  const dispatch = useDispatch();

  const [formValues, setValues] = useState({ name: "", password: "" });

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ ...formValues }));
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...formValues, [name]: value });
  };
  useEffect(() => {
    if (getToken()) {
      dispatch(push("/welcome/userList"));
    }
  });
  return (
    <div className="bg">
      <div className="container">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Username"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Remember me</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={!formValues.name || !formValues.password}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
