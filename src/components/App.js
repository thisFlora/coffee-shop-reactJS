import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <>
            <Header />
            <Container as ="main">
            </Container>

            <Footer />
        </>
    )
}

export default App