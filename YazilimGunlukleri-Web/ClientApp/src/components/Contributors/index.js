import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Contributors extends Component {
  displayName = Contributors.name;

  render() {
    return (
      <div className="contributors">
        <h1>Geliştiriciler</h1>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/Contributors/DevranAkat"
        >
          Devran Akat
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/Contributors/YunusOzdemir"
        >
          Yunus Özdemir
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/Contributors/OnurhanDemir"
        >
          Onurhan Demir
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/Contributors/ErtugrulEmreCihan"
        >
          Ertuğrul Emre Cihan
        </NavLink>
      </div>
    );
  }
}
