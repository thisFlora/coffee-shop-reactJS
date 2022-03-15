import React from 'react';
import { Card } from 'react-bootstrap';

const ItemDetail = (props) => {
    return (
        <Card id={props.producto.id}>
            <Card.Header>{props.producto.nombre}</Card.Header>
            <Card.Body>{props.producto.descripcion}</Card.Body>
        </Card>
    );
}

export default ItemDetail;