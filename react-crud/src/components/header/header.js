import React, { Component } from "react";
import { unSetAuthorization } from "../../utils/authentication";
import { logOut } from "../../actions/sessionActions";
import { connect } from "react-redux";
import { push } from "connected-react-router";

export class Header extends Component {
  logout = () => {
    unSetAuthorization();
    this.props.logOut();
    this.props.push("/");
  };

  render() {
    return (
      <div style={{ textAlign: "right" }}>
        <button onClick={this.logout} className="btn btn-dark">
          Logout
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { logOut, push }
)(Header);
