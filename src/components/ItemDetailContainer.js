import { React, useState, useEffect } from 'react';
import Productos from '../data/Productos.js';
import ItemDetail from './ItemDetail.js';
import { Container, Row } from 'react-bootstrap';

let productosActualizados = Productos;

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    const promesa = new Promise((res, rej) => {
        setTimeout(()=> {
            res(productosActualizados[0]);
        },2000)
    });

    useEffect(()=> {
        promesa
        .then((response)=> {
            setProducto(response);
        }).catch((e) => {
            console.log(e);
        });
    });

    return (
        <>
        <Container className= "justify-content-center containerDetail">
            <h3>Desafio: Detalle de Producto</h3>
				<Row xs={1} md={1} xl={1} className="g-4">
						<ItemDetail producto={producto} key={producto.id} />
				</Row>
		</Container>
        </>
        )
};

export default ItemDetailContainer;