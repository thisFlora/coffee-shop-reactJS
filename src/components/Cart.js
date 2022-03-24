import { React, useContext } from 'react'
import { contexto } from "../context/CartContext.js";
import { toast } from 'react-toastify';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {

    const resultado = useContext(contexto);
    const carrito = resultado.cart;
    const removeItem = (product) => {
        resultado.removeItem(product);
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

    console.log(carrito);
    return (
        <>
            <h1>Carrito</h1>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio unidad</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                {carrito && 
                    carrito.map((item) => {
                        return (
                            <> 
                                <tr key={item.product.id}>
                                    <td>{item.product.nombre}</td>
                                    <td>$ {item.product.precio}</td>
                                    <td>{item.count}</td>
                                    <td>$ {item.product.precio * item.count}</td>
                                    <td><Button variant="outline-dark" onClick={ () => removeItem(item.product)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="fa-solid fa-trash-can" />
                                    </Button> 
                                    </td>
                                </tr>
                            </>
                            )
                    })
                }
                {!carrito && <tr><td>No hay productos en el carrito</td></tr>}
                </tbody>
            </Table>
        </>
        
    )
    
}

export default Cart;