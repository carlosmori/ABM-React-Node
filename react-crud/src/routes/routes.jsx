import React from "react";
import { Route } from "react-router-dom";
import userList from "../components/userList/userList";
import addUser from "../components/addUser/addUser";
const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={userList} />
      <Route path="/addUser" component={addUser} />
    </div>
  );
};
export default Routes;
