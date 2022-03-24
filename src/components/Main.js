import ItemListContainer from './ItemListContainer.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import Cart from './Cart.js'
import { Routes, Route } from 'react-router-dom';


const Main = () => {
    return (
        <main as ="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
            </Routes>
        </main>
    );
}

export default Main;