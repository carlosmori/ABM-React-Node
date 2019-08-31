import React, { Component } from "react";
import "./login.scss";
import { connect } from "react-redux";
import { logIn } from "../../actions/sessionActions.js";
import { push } from "connected-react-router";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  logIn = event => {
    event.preventDefault();
    const credentials = { ...this.state };
    this.props.logIn(credentials);
  };
  componentDidUpdate() {
    if (this.props.session.userLogged) {
      this.props.push("/welcome/userList");
    }
  }
  render() {
    return (
      <div className="bg">
        <div className="container">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
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
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            {/* TODO implement remember me functionallity */}
            {/* <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Remember me</label>
            </div> */}
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.logIn}
              disabled={!this.state.name || !this.state.password}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  session: state.sessionReducerState.session
});
export default connect(
  mapStateToProps,
  { logIn, push }
)(Login);
