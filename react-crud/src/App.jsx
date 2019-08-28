import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { createBrowserHistory as createHistory } from "history";
import { getToken, setAuthorization } from "./utils/authentication";
const history = createHistory();

export class App extends Component {
  constructor() {
    super();
    setAuthorization(getToken());
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
