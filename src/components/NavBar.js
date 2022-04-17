import { React, useContext } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';
import { contexto } from "../context/CartContext.js";

const NavBar = () => {
    const resultado = useContext(contexto);
    const carrito = resultado.cart;

    return (
        <>
        <header id="main-header">
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">
                <img alt="plant" src={logo} className="d-inline-block align-top logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/categoria/simple">Simple</NavLink>
                        <NavLink to="/categoria/combo">Combo</NavLink>
                    </Nav>
                    {carrito.length > 0 && (
                    <>
                    <NavLink to="/carrito">
                        <CartWidget />
                    </NavLink>
                    </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
        </>
    );
}

export default NavBar;