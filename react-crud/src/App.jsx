import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Routes from "./routes/routes";
import { createBrowserHistory as createHistory } from "history";
import { getToken, setAuthorization } from "./utils/authentication";

import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store";

const store = configureStore({});
export class App extends Component {
  constructor() {
    super();
    setAuthorization(getToken());
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router history={history}>
            <Routes />
          </Router>
          {/* <Switch>
            <Route exact path="/" render={() => <div>Match</div>} />
            <Route render={() => <div>Miss</div>} />
          </Switch> */}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
