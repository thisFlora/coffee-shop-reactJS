import ItemListContainer from './ItemListContainer.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import Carrito from './Carrito'
import { Routes, Route } from 'react-router-dom';


const Main = () => {
    return (
        <main as ="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/item/:idProducto" element={<ItemDetailContainer/>} />
            </Routes>
        </main>
    );
}

export default Main;