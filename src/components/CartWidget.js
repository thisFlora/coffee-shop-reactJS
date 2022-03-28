import { React, useContext } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { contexto } from "../context/CartContext.js";

const CartWidget = () => {
	const resultado = useContext(contexto);
	const carrito = resultado.cart;
	return (
		<>
		{carrito.length > 0 && (
			<>
		<Button variant="outline-secondary">
			<FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
		</Button>
		</>
		)}
		</>
	);
};

export default CartWidget;