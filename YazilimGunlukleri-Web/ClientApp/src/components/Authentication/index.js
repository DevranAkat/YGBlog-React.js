import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./authenticationDetail.css";

export default class Authentication extends Component {
  displayName = Authentication.name;

  render() {
    return (
      <div className="authentication">
        <h1 className="header">Kayıt Ol & Giriş Yap</h1>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/Authentication/Login"
        >
          <Glyphicon glyph="open" /> Giriş Yap
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="active"
          to="/Authentication/Register"
        >
          <Glyphicon glyph="plus" /> Kayıt Ol
        </NavLink>
      </div>
    );
  }
}
