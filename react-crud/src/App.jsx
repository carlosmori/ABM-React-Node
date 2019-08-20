import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { createBrowserHistory as createHistory } from "history";
const history = createHistory();

export class App extends Component {
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
