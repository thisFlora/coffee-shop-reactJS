import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                <img alt="plant" src={logo} className="d-inline-block align-top logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Nav.Link href="#link">Inicio</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <Nav.Link href="#link">Carrito</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;