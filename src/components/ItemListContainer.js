import React from 'react';
import ItemCount from './ItemCount.js';

const ItemListContainer = (props) => {
    const miOnAdd = () => {}
    return (
            <>
            <h1>{props.greeting}</h1>
            <ItemCount onAdd={miOnAdd} initial={0} stock={50} deshabilitar={true}/>
            </>
    );
};

export default ItemListContainer;