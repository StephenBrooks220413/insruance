import React from "react";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
import Resources from "./Resources";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <div class="fixed-top">
            <div id="nav1" class="w3-bar w3-light-grey">
              <span class="w3-bar-item">Affordbale Insurance</span>
              <span className="float-right">
                <Link to="/" class="w3-bar-item w3-text-black">Home</Link>
                <Link to="/about" class="w3-bar-item w3-text-black">About</Link>
                {/* <Link to="/users" class="w3-bar-item w3-text-black">Users</Link> */}
                {/* <Link to="/resources" class="w3-bar-item w3-text-black">Resources</Link> */}
              </span>
            </div>
            <div id="nav2" class="w3-bar w3-light-grey">
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-light-grey">MENU</button>
                <div class="w3-dropdown-content w3-bar-block w3-border">
                  <Link to="/" class="w3-bar-item w3-button">Home</Link>
                  <Link to="/about" class="w3-bar-item w3-button">About</Link>
                  {/* <Link to="/users" class="w3-bar-item w3-button">Users</Link> */}
                  {/* <hr /> */}
                  {/* <Link to="/resources" class="w3-bar-item w3-button">Resources</Link> */}
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
