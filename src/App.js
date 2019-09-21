import React from "react";
import List from "./components/List";
import createStore from "./store/store";
import { Provider } from "react-redux";

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
};

export default App;
