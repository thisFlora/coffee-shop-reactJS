import { React, useState, useEffect } from 'react';
import Productos from '../data/Productos.js';
import ItemDetail from './ItemDetail.js';
import { Container, Row } from 'react-bootstrap';

let productosActualizados = Productos;

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((res, rej) => {
        setTimeout(()=> {
            res(productosActualizados);
        },2000)
    });

    useEffect(()=> {
        promesa
        .then((response)=> {
            setProductos(response);
        }).catch((e) => {
            console.log(e);
        });
    });

    return (
        <>
        <Container className= "justify-content-center containerDetail">
            <h3>Desafio: Detalle de Producto</h3>
				<Row xs={1} md={2} xl={3} className="g-4">
					{productos.map((producto, indice) => {
						return <ItemDetail producto={producto} key={indice} />;
					})}
				</Row>
		</Container>
        </>
        )
};

export default ItemDetailContainer;