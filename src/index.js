import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Switch , Link, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import Company from "./components/Company/Company";
import ListCapsules from "./components/Capsules/ListCapsules";
import ListCores from "./components/Cores/ListCores";


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/spacex" component={Company}></Route>
      <Route exact path="/capsules" component={ListCapsules}></Route>
      <Route exact path="/cores" component={ListCores}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
