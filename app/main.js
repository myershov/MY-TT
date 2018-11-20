import { DataTable } from "./components";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./store/reducers";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import React from "react";
import "./main.styl";
import store from "./store/gameboard/actions";
// const store = createStore(combineReducers(reducers), composeWithDevTools(
//   applyMiddleware(thunk)
// ))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={DataTable} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
