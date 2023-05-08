import React from 'react';
import { Link } from 'react-router-dom';
// import './Navigation.css';
import {Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => {
  return (
    <Navbar className="d-flex bd-highlight pozadina" expand="lg">
      <Navbar.Brand className="p-2 w-100 bd-highlight" href="#home">Your Favorite Book App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="p-2 flex-shrink-1 bd-highlight" id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to='/books'>Home</Link>
          <Link to='/about'>About</Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}