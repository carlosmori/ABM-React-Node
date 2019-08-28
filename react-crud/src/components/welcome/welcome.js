import React, { Component } from "react";
import Header from "../header/header";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { addUser } from "../../sagas/user-saga";
import userList from "../userList/userList";
import PrivateRoute from "../../routes/private-route";

function Welcome(props) {
  return (
    <div>
      <Route path="/welcome" component={Header} />
      <Route path="/welcome/userList" component={userList} />
      <Route path="/welcome/addUser" component={addUser} />
    </div>
  );
}

export default Welcome;
