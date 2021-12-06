import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold site-logo" href="/">
                        Priyo-Food
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink className="navLink" activeStyle={{
                                    fontWeight: "bold",
                                    color: "seagreen",
                                    textTransform: 'uppercase'
                                }} to="/restaurant">
                                    Meals
                                </NavLink >
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="navLink" activeStyle={{
                                    fontWeight: "bold",
                                    color: "seagreen",
                                    textTransform: 'uppercase'
                                }} to="/about">
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink className="navLink" activeStyle={{
                                    fontWeight: "bold",
                                    color: "seagreen",
                                    textTransform: 'uppercase'
                                }} to="/contact">
                                    contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;