import { React, useState, useEffect } from 'react';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import Productos from '../data/Productos.js';

let productosIniciales = Productos;

const ItemListContainer = (props) => {
    const miOnAdd = (count) => {
        console.log(count);
    }

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

        const promesa = new Promise((res, rej) => {
            setTimeout(()=> {
                res(productosIniciales);
            },2000)
        });

        useEffect(()=> {
        promesa
        .then((response)=> {
            setProductos(response);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            setLoading(false);
        });
});

    return (
            <>
            <h1>{props.greeting}</h1>
            <h3>Desafio: Catálogo con MAPS y Promises</h3>
			<ItemList productos={productos} loading={loading} />
            <ItemCount onAdd={miOnAdd} initial={0} stock={50}/>
            </>
    );
};

export default ItemListContainer;