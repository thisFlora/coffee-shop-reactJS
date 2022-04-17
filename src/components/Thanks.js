import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { contexto } from '../context/CartContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export const Thanks = () => {
     const id = useContext(contexto).idOrder;
     return (
     <Container className="thanks-container">
          <h3>Gracias por tu compra, nos estaremos comunicando por email para coordinar el envio.</h3>
          <h3>Su orden tiene el id: {id}</h3>
          <NavLink to="/">
          <Button className="thanks-btn">Volver al inicio</Button>
          </NavLink>
     </Container>
)
}

export default Thanks;
