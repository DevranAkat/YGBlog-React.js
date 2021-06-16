import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
      return (
          <Navbar bsStyle="custom" fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>YG React</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/counter'}>
              <NavItem>
                <Glyphicon glyph='education' /> Counter
              </NavItem>
            </LinkContainer>
                <LinkContainer to={'/WeatherForecast'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Hava durumu
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/Contributors/'}>
              <NavItem>
                <Glyphicon glyph='star' /> Tanışma
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
       </Navbar>
    );
  }
}
