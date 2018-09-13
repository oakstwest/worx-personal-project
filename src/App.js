import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/Home/children/Nav";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </HashRouter>
    );
  }
}
