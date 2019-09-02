import React from "react";
import { unSetAuthorization } from "../../utils/authentication";
import { logOut } from "../../actions/sessionActions";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const logout = () => {
    unSetAuthorization();
    dispatch(logOut());
    dispatch(push("/"));
  };
  return (
    <div style={{ textAlign: "right" }}>
      <button onClick={logout} className="btn btn-dark">
        Logout
      </button>
    </div>
  );
};

export default Header;
