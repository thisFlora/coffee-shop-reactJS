import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Main from '../components/Main.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;