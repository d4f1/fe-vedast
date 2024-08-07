import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import ListVehicleOwner from "./components/inventory/vehicle-owner/List";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/vehicle-owner"} className="nav-link">
                Vehicle-owner
              </Link>
            </li>
          </div>
        </nav>
        <div className="container-fluid">
        </div>
      </div>
    );
  }
}

export default App;
