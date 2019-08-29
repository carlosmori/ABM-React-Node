import React, { Component } from "react";
import { unSetAuthorization } from "../../utils/authentication";
export class Header extends Component {
  logout = () => {
    this.props.history.push("/");
    unSetAuthorization();
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

export default Header;
