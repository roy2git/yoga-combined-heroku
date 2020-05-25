import React, { Component } from "react";
import { Link } from "react-router-dom";

import Routes from "./routes";

class App extends Component {
  render() {
    console.log("App js render");

    return (
      <div>
        <nav>
          <ul>
            <li>
              <h3>
                <Link to="/"> Home </Link>
              </h3>
            </li>
          </ul>
          <ul>
            <li>
              <h3>
                <Link to="/">All Yoga Poses</Link>
              </h3>
            </li>
            <li>
              <h3>
                <Link to="/yoga/add">Add Yoga Pose</Link>
              </h3>
            </li>
          </ul>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
