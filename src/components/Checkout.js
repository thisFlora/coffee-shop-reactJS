import { React } from 'react'
import { ItemCheckout } from './ItemCheckout';


const Checkout = ({cart}) => {
     return (
          <>
                    <h3>Tu carrito🛒</h3>
                    {cart.map((producto) => (
				<ItemCheckout key={producto.id} producto={producto} />
			))}
          </>
     )
}

export default Checkout;