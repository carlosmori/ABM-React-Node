import { createStore, applyMiddleware } from "redux";
// import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas/index";
const initialState = {};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

// run the saga
sagaMiddleware.run(rootSaga);

export default store;
