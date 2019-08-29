import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/login/login.jsx";
import PrivateRoute from "./private-route";
import welcome from "../components/welcome/welcome";
const Routes = () => {
  return (
    // La solucion es otro router
    <div>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/welcome" component={welcome} />
    </div>
  );
};
export default Routes;
