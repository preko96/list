import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import List from "./List";
import Search from "./Search";

import "./styles.css";

function App() {
  return (
    <Fragment>
      <Search />
      <List />
    </Fragment>
  );
}

function EnhancedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<EnhancedApp />, rootElement);
