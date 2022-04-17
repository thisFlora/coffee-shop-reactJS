import { React, useState, useContext } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { contexto } from '../context/CartContext';
import { useNavigate } from "react-router-dom";
import Checkout from './Checkout';

const CheckoutContainer = () => {
     const [nombre, setNombre] = useState('');
     const [telefono, setTelefono] = useState('');
     const [correo, setCorreo] = useState('');
     const { sendOrder, idOrder, clear, cart } = useContext(contexto);
     const navigation = useNavigate();
     
     const handleChange = (e) => {
          e.preventDefault();
          if (e.target.id === 'formBasicName') {
               setNombre(e.target.value);
          } else if (e.target.id=== 'formBasicPhone') {
               setTelefono(e.target.value);
          } else if (e.target.id === 'formBasicEmail') {
               setCorreo(e.target.value);
          }
     };

     const sendAlert = () => {
          toast.success('Su orden tiene el id: ' + idOrder , 
          {
               position: "top-right",
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: false,
               draggable: true,
               progress: undefined,
          });
          clear();
          setTimeout(
               navigation('/thanks'),2000
          )
     }

     return (
          <>
               <Container className="container-checkout">
                    <Row>
                         <Col xs={6}>
                         <h3>Datos de la compra</h3>
                              <Form>
                                   <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Nombre" autoComplete="off" onChange={handleChange} />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicPhone" >
                                        <Form.Label>Telefono</Form.Label>
                                        <Form.Control type="phone" placeholder="Telefono" autoComplete="off" onChange={handleChange} />
                                   </Form.Group>

                                   <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo Electronico</Form.Label>
                                        <Form.Control type="email" placeholder="Email" autoComplete="off" onChange={handleChange} />
                                   </Form.Group>

                                   <Button className="btn-checkout" variant="primary" type="submit" onClick={()=> {
                                        sendOrder(nombre, telefono, correo);
                                        sendAlert();
                                   }}>
                                        Enviar
                                   </Button>
                              </Form>
                         </Col>
                         <Col xs={6}>
                              <Checkout cart={cart}/>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}

export default CheckoutContainer;