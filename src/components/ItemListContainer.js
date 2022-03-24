import { React, useState, useEffect } from 'react';
import ItemList from './ItemList.js';
import Productos from '../mocks/Productos.js';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

let productosIniciales = Productos;

const ItemListContainer = ({greeting}) => {

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const {idCategoria} = useParams();


    useEffect(()=> {
        const promesa = new Promise((res, rej) => {
            setTimeout(()=> {
                if(idCategoria === undefined){
                    res(productosIniciales);
                }else {
                    const productosFiltrados = productosIniciales.filter((el) => el.categoria === idCategoria);
                    res(productosFiltrados);
                }

            },2000)
        });

        promesa
        .then((response)=> {
            setProductos(response);
        }).catch((e) => {
            toast.error(e);
        }).finally(() => {
            setLoading(false);
        });
},[idCategoria]);

    return (
            <>
            <h1>{greeting}</h1>
            <h3>Desafio: Catálogo con MAPS y Promises</h3>
			<ItemList productos={productos} loading={loading} />
            </>
    );
};

export default ItemListContainer;