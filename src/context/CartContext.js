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
        let cantidad = 0;
        if(cart){
            cart.forEach(item => {
                totalAux += item.product.precio * item.count;
                cantidad += cantidad + item.count;
            });
        }
        setTotal(totalAux);
        setCantidad(cantidad);
        return totalAux;
    }

    const valorDelContexto = {
        addItem:addItem,
        removeItem:removeItem,
        clear:clear,
        cart:cart,
        total:total,
        getTotal:getTotal,
        cantidadActual:cantidadActual
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;