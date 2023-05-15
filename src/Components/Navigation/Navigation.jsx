import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import {Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => {
  return (
    <Navbar className="d-flex bd-highlight back-color" expand="lg">
      <Navbar.Brand className="text-props flex-shrink-1 p-2 bd-highlight" as={Link} to='/books'>Your Favorite Book App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-4'/>
      <Navbar.Collapse className="p-2 bd-highlight" id="basic-navbar-nav">
        <Nav className="ms-auto me-4">
          <NavLink to="/books" className="links-props me-4" activeClassName="active">Home</NavLink>
          <NavLink to="/about" className="links-props" activeClassName="active">About</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}