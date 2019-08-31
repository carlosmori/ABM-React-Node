import React from "react";
import Header from "../header/header";
import { Route } from "react-router-dom";
import AddUser from "../addUser/addUser";
import userList from "../userList/userList";

function Welcome(props) {
  return (
    <div>
      <Route path="/welcome" component={Header} />
      <Route path="/welcome/userList" component={userList} />
      <Route path="/welcome/addUser" component={AddUser} />
    </div>
  );
}

export default Welcome;
