import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/img/coffee-plant.png";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    OH MY COFFEE
                <img alt="plant" src={logo} className="d-inline-block align-top logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <NavDropdown title="Otros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sucursales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sobre Nosotros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar