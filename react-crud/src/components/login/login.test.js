import React from "react";
import { shallow, mount } from "enzyme";
import Login from "./login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
describe("Login", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, wrapper;
  beforeEach(() => {
    store = mockStore(initialState);
  });
  it('should render correctly in "debug" mode', () => {
    const component = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(component.exists()).toBe(true);
  });
});
