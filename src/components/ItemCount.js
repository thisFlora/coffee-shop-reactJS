import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState(initial)
    const [deshabilitar, setBtn] = useState(true)

    const aumentar = () => {
        if(contador < stock){
            setContador(contador + 1);
            setBtn(false);
        }
    };

    const restar = () => {
        if(contador > initial){
            setContador(contador - 1);
        }
        if(contador === 1){
            setContador(0);
            setBtn(true);
        }
    };

    const confirmar = () => {
        onAdd(contador);
    };

    return (
        <Card style={{padding: "10px"}}>
            <Card.Body>
                <Card.Title>Cafecitos☕</Card.Title>
                <Card.Text>El stock disponible: {stock} unidades</Card.Text> 
                <Button variant="outline-secondary" onClick={restar}>-</Button>
                <Button variant="outline-secondary" disabled>{contador}</Button>
                <Button variant="outline-secondary" onClick={aumentar}>+</Button>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-primary" onClick={confirmar} disabled={deshabilitar}>Agregar al Carrito</Button>
            </Card.Footer>
        </Card>
    );
};

export default ItemCount;