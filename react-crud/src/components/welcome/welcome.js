import React from "react";
import Header from "../header/header";
import { Route } from "react-router-dom";
import AddUser from "../addUser/addUser";
import userList from "../userList/userList";
import PrivateRoute from "../../routes/private-route.jsx";
function Welcome() {
  return (
    <div>
      <Route path="/welcome" component={Header} />
      <PrivateRoute path="/welcome/userList" component={userList} />
      <PrivateRoute path="/welcome/addUser" component={AddUser} />
    </div>
  );
}

export default Welcome;
