import ItemListContainer from './ItemListContainer.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import Cart from './Cart.js'
import Checkout from './Checkout.js'
import { Routes, Route } from 'react-router-dom';


const Main = () => {
    return (
        <main as ="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </main>
    );
}

export default Main;