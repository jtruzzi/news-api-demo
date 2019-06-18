import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
const history = require("history").createBrowserHistory;

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/:category" exact component={Articles} />
      </BrowserRouter>
    );
  }
}
export default App;
