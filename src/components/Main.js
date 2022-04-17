import ItemListContainer from './ItemListContainer.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import Cart from './Cart.js'
import CheckoutContainer from './CheckoutContainer.js'
import { Routes, Route } from 'react-router-dom';
import Thanks from './Thanks.js'

const Main = () => {
    return (
        <main as ="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
                <Route path="/checkout" element={<CheckoutContainer />} />
                <Route path="/thanks" element={<Thanks />} />
            </Routes>
        </main>
    );
}

export default Main;