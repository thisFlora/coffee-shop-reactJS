import { React, useState, useEffect } from 'react';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';

let productosIniciales = [
    {
        id: 1,
        nombre: "Café Catuaí",
        precio: 1500,
        img: '../assets/img/brasil01.png'
    },
    {
        id:2,
        nombre: "Chiapas México",
        precio: 1400,
        img: '../assets/img/mexico01.png'
    },
    {
        id:3,
        nombre: "Kit Cafetero",
        precio: 3000,
        img: '../assets/img/kit01.png'
    }
]

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
        .then(()=> {
            setProductos(productosIniciales);
        }).catch((e) => {
            console.log(e);
        }).finally(() => {
            setLoading(false);
        });
});

    return (
            <>
            <h1>{props.greeting}</h1>
			<ItemList productos={productos} loading={loading} />
            <ItemCount onAdd={miOnAdd} initial={0} stock={50}/>
            </>
    );
};

export default ItemListContainer;