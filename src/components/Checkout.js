import { React, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';


const Checkout = () => {

     const [nombre, setNombre] = useState('');
     const [telefono, setTelefono] = useState('');
     const [correo, setCorreo] = useState('');
     const [usuario, setUsuario] = useState([]);


     const handleChange = (e) => {
          if (e.target.id === 'formBasicName') {
               setNombre(e.target.value);
          } else if (e.target.id=== 'formBasicPhone') {
               setTelefono(e.target.value);
          } else if (e.target.id === 'formBasicEmail') {
               setCorreo(e.target.value);
          }
     };

     const checkOut = () => {
               const usuAux = usuario.slice(0);
               const user = {
                    nombre: nombre,
                    telefono: telefono,
                    email: correo
               };
               usuAux.push(user);
               setUsuario(usuAux);
               setNombre("");
               setTelefono("");
               setCorreo("");
               toast.success('Se envió el formulario, pronto nos pondremos en contacto')
     };
     console.log(usuario);
     return (
          <>
               <Container fluid className="container-checkout">
                    <h3>Datos de envío</h3>
                    <Row>
                         <Col xs={6}>
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

                                   <Button variant="primary" onClick={checkOut}>
                                        Enviar
                                   </Button>
                              </Form>
                         </Col>
                         <Col xs={6}>
                         </Col>
                    </Row>
               </Container>
          </>
     )
}

export default Checkout;