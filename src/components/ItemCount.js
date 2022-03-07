import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial)
    let [deshabilitar, setBtn] = useState(props.deshabilitar)

    const aumentar = () => {
        if(contador < props.stock){
            setContador(contador + 1);
            setBtn(deshabilitar = false);
        }
    }

    const restar = () => {
        console.log(contador);
        if(contador > 0){
            setContador(contador - 1);
        }
        if(contador === 1){
            setContador(0);
            setBtn(deshabilitar = true);
        }
    }

    return (
        <Card>
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