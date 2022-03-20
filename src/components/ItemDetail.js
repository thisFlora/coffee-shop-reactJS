import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ItemCount from './ItemCount.js';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ItemDetail = ({producto}) => {
    const [Count, setCount] = useState(true);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (contador) => {
        if(contador !== undefined){
            setCount(false);
            setCantidad(contador);
            toast.success('Se agregó el producto al carrito', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                });
        }
    };
    console.log(cantidad);
    return (
        <Card id={producto.id}>
            <Card.Header>{producto.nombre}</Card.Header>
            <Card.Body>{producto.descripcion}</Card.Body>
            <Card.Footer>
            {Count && <ItemCount initial={0} stock={50} onAdd={onAdd}/>}
            {!Count && (
            <>
            <p>Seleccionaste {cantidad} unidades del producto.</p>
            <NavLink to="/carrito">
            <Button variant="outline-primary">Ir al Carrito</Button>
            </NavLink>
            </>
            )}
            </Card.Footer>
        </Card>
    );
};



export default ItemDetail;