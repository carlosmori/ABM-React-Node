import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";
import rootSaga from "./sagas/index";

export const history = createBrowserHistory();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        sagaMiddleware
      )
    )
  );
  // run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}
