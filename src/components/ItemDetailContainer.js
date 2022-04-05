import { React, useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import { Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../database/firebase';

const ItemDetailContainer = () => {
	const {idProducto} = useParams();
	const [producto, setProducto] = useState({});

	useEffect(()=> {
		const docRef = doc(db, "items", idProducto);
			const items = getDoc(docRef);

			items
				.then((item) => {
					const producto = {
						id: item.id,
						...item.data(),
					};
					setProducto(producto);
				})
				.catch(() => {
					toast.error("Error al cargar los productos");
				});
	}, [idProducto]);

	return (
		<>
		<Container className= "justify-content-center containerDetail">
			<h3>Detalle de Producto</h3>
					<Row xs={1} md={1} xl={1} className="g-4">
							<ItemDetail producto={producto} key={producto.id} />
					</Row>
			</Container>
		</>
		)
};

export default ItemDetailContainer;