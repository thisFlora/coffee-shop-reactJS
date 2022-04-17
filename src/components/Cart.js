import { React, useContext} from 'react'
import { contexto } from "../context/CartContext.js";
import { toast } from 'react-toastify';
import { Table, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import pusheen from '../assets/img/pusheen.png';


const Cart = () => {
    const resultado = useContext(contexto);
    const carrito = resultado.cart;

    const removeItem = (id) => {
        resultado.removeItem(id);
        toast.error('Se eliminó el producto al carrito', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    const clear = () => {
        resultado.clear();
        toast.error('Se eliminó el carrito', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    const total = () => {
        let total = resultado.getTotal();
        return total;
    }

    return (
        <>
            {carrito.length === 0 &&
                <>
                    <div className="div-img">
                        <img src={pusheen} alt="pusheen" className="pusheen" />
                    </div>
                    <div className="div-btnVacio">
                        <h3>Ups, no hay productos en el carrito</h3>
                        <NavLink to="/">
                            <Button variant="outline-secondary" className="btn-vacio">
                                Volver a la tienda
                            </Button>
                        </NavLink>
                    </div>
                </>
            }
            {carrito.length > 0 &&
                <>
                    <Container>
                        <h1> Carrito 🛒</h1>
                        <div className="div-btnClear">
                            <Button className="btn-clear" variant="outline-secondary" onClick={() => clear()}>Vaciar carrito</Button>
                        </div>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio unidad</th>
                                    <th>Cantidad</th>
                                    <th>Subtotal</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrito &&
                                    carrito.map((item, index) => {
                                        return (
                                            <>
                                                <tr key={index}>
                                                    <td>{item.product.nombre}</td>
                                                    <td>$ {item.product.precio}</td>
                                                    <td>{item.count}</td>
                                                    <td>$ {item.product.precio * item.count}</td>
                                                    <td><Button variant="" onClick={() => removeItem(item.product.id)}>
                                                        <FontAwesomeIcon icon={faTrashCan} className="fa-solid fa-trash-can" />
                                                    </Button>
                                                    </td>
                                                </tr>

                                            </>
                                        )
                                    })
                                }
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total a Pagar:</td>
                                        <td>$ {total()}</td>
                                    </tr>
                            </tbody>
                        </Table>
                        <div className="d-flex justify-content-end">
                            <NavLink to="/checkout">
                                <Button variant="outline-secondary" carrito={carrito}>
                                    Terminar mi compra
                                </Button>
                            </NavLink>
                        </div>
                    </Container>
                </>}
        </>

    )
}


export default Cart;