import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import CartContext from '../context/CartContext.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <CartContext>
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
            <ToastContainer />
        </BrowserRouter>
        </CartContext>
    );
}

export default App;