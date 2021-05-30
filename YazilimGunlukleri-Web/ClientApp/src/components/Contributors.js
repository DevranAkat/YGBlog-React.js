import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class Contributors extends Component {
    displayName = Contributors.name

    render() {
        return (
            <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/YunusOzdemir"
            >
                Yunus Özdemir
            </NavLink>
        );
    }
}
