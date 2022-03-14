import ItemListContainer from '../components/ItemListContainer.js';
import ItemDetailContainer from './ItemDetailContainer.js';

const Main = () => {
    return (
        <main as ="container">
            <ItemListContainer greeting="Bienvenido" />
            <ItemDetailContainer />
        </main>
    );
}

export default Main;