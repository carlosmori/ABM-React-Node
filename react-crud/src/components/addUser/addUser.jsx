import React, { Component } from "react";
import { connect } from "react-redux";
import "./addUser.css";
import { addUser, updateUser } from "../../actions/userActions";

export class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      firstName: "",
      lastName: "",
      email: ""
    };
  }
  componentDidMount() {
    if (this.props.user.action === "Update") {
      this.setState({
        id: this.props.user.id,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email
      });
    }
  }
  handleOnChangeInputs = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleUserSubmit = event => {
    event.preventDefault();
    const newUser = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    };
    this.props.user.action === "Add User"
      ? this.props.addUser(newUser)
      : this.props.updateUser(newUser);
    this.navigateHome();
  };
  navigateHome = () => {
    this.props.history.push("/userList");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <button
              className="btn btn-success"
              onClick={this.navigateHome}
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
                  value={this.state.firstName}
                  onChange={this.handleOnChangeInputs}
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
                  value={this.state.lastName}
                  onChange={this.handleOnChangeInputs}
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
                  value={this.state.email}
                  onChange={this.handleOnChangeInputs}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-2"
                onClick={this.handleUserSubmit}
              >
                {this.props.user.action}
              </button>
            </form>
          </div>
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.usersReducerState.newUserFromRedux
});

export default connect(
  mapStateToProps,
  { addUser, updateUser }
)(AddUser);
