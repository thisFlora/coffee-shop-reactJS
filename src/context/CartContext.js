import { createContext, useState } from 'react';

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({children}) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadActual, setCantidad] = useState(0);

    const addItem = (product, count) => {
        let cartProduct = { product, count }
        let cartAux = [];
        
        if(isInCart(product.id)){
            cartAux = cart.map(item => {
                if(item.product.id === product.id){
                    item.count += count;
                }
                return item;
            });
        } else {
            cartAux = [...cart, cartProduct];
        }
        setCart(cartAux);
    }


    const removeItem = (id) => {
        if(isInCart(id)){
            const cartAux = cart.filter(item => item.product.id !== id);
            setCart(cartAux);
        }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart && cart.some(el=> el.product.id === id)
    }

    const getTotal = () => {
        let totalAux = 0;
        if(cart){
            cart.forEach(item => {
                totalAux += item.product.precio * item.count;
            });
        }
        setTotal(totalAux);;
        return totalAux;
    }

    const getCantidad = () => {
        let cantidadAux = 0;
        if(cart){
            cart.forEach(item => {
                cantidadAux += item.count;
            });
        }
        setCantidad(cantidadAux);
        return cantidadAux;
    }

    const valorDelContexto = {
        addItem:addItem,
        removeItem:removeItem,
        clear:clear,
        cart:cart,
        total:total,
        getTotal:getTotal,
        getCantidad:getCantidad,
        cantidadActual:cantidadActual
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;