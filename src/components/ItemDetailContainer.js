import { React, useState, useEffect } from 'react';
import Productos from '../data/Productos.js';
import ItemDetail from './ItemDetail.js';
import { Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const {idProducto} = useParams();

    const [producto, setProducto] = useState({});

    useEffect(()=> {
        const promesa = new Promise((res, rej) => {
            setTimeout(()=> {
                res(Productos);
            },2000)
        });

        promesa
        .then((response)=> {
            const producto = response.find((el)=>el.id===parseInt(idProducto))
            setProducto(producto);
        }).catch((e) => {
            toast.error(e);
        });
    }, [idProducto]);

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