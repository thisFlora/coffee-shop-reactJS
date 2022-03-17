import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount.js';


const ItemDetail = (props) => {

    return (
        <Card id={props.producto.id}>
            <Card.Header>{props.producto.nombre}</Card.Header>
            <Card.Body>{props.producto.descripcion}</Card.Body>
            <ItemCount initial={0} stock={50}/>
        </Card>
    );
}

export default ItemDetail;