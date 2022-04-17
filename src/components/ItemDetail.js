import { React, useState, useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount.js';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { contexto } from "../context/CartContext.js";

const ItemDetail = ({producto}) => {
    const { addItem } = useContext(contexto);

    const [count, setCount] = useState(true);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (contador) => {
        if(contador !== undefined){
            setCount(false);
            setCantidad(contador);
            addItem(producto, contador);
            toast.success('Se agregó el producto al carrito', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <Card key={producto.id}>
            <Card.Header>{producto.nombre}</Card.Header>
            <Card.Body>{producto.descripcion}</Card.Body>
            <Card.Footer>
            {count && <ItemCount initial={0} stock={50} onAdd={onAdd}/>}
            {!count && (
            <>
            <p>Seleccionaste {cantidad} unidades del producto.</p>
            <NavLink to="/carrito">
            <Button className="btn-1">Ir al Carrito</Button>
            </NavLink>
            </>
            )}
            </Card.Footer>
        </Card>
    );
};



export default ItemDetail;