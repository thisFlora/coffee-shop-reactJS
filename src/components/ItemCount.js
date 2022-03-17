import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial)
    let [deshabilitar, setBtn] = useState(true)

    const aumentar = () => {
        if(contador < props.stock){
            setContador(contador + 1);
            setBtn(false);
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador(contador - 1);
        }
        if(contador === 1){
            setContador(0);
            setBtn(true);
        }
    }

    return (
        <Card style={{padding: "10px"}}>
            <Card.Header>Desafio Componentes II</Card.Header>
            <Card.Body>
                <Card.Title>Cafecitos☕</Card.Title>
                <Card.Text>El stock disponible: {props.stock} unidades</Card.Text> 
                <Button variant="outline-secondary" onClick={restar}>-</Button>
                <Button variant="outline-secondary" disabled>{contador}</Button>
                <Button variant="outline-secondary" onClick={aumentar}>+</Button>
            </Card.Body>
            <Card.Footer>
            <Button variant="outline-primary" disabled={deshabilitar}>Agregar al Carrito</Button>
            </Card.Footer>
        </Card>
    )
}

export default ItemCount;