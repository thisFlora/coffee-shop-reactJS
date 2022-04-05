import { React, useState, useEffect } from 'react';
import ItemList from './ItemList.js';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../database/firebase";


const ItemListContainer = ({greeting}) => {

	const [loading, setLoading] = useState(true);
	const [productos, setProductos] = useState([]);
	const {idCategoria} = useParams();


	useEffect(()=> {

		const itemsCollection = collection(db, "items");
		const queryCat = query(itemsCollection, where("categoria", "==", `${idCategoria}`));

		const auxiliar = [];

		if (idCategoria === undefined) {
			const documentos = getDocs(itemsCollection);

			documentos
				.then((respuesta) => {
					respuesta.forEach((documento) => {
						const item = {
							id: documento.id,
							...documento.data(),
						};
						auxiliar.push(item);
					});
					setProductos(auxiliar);
				})
				.catch(() => {
					toast.error("Error al cargar los productos");
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			const documentosCat = getDocs(queryCat);
			documentosCat
				.then((items) => {
					items.forEach((item) => {
						const producto = {
							id: item.id,
							...item.data(),
						};
						auxiliar.push(producto);
					});
					setProductos(auxiliar);
				})
				.catch((e) => {
					toast.error("Error al cargar los productos");
				})
				.finally(() => {
					setLoading(false);
				});
		}
},[idCategoria]);

	return (
			<>
			<h1>Catálogo de productos</h1>
				<ItemList productos={productos} loading={loading} />
			</>
	);
};

export default ItemListContainer;