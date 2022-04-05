import { React, useContext } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { contexto } from "../context/CartContext.js";

const CartWidget = () => {
	const resultado = useContext(contexto);
	const cantidad = resultado.cantidadActual;
	return (
		<Button variant="outline-secondary">
			<FontAwesomeIcon icon={faCartShopping} className="shopping-cart" />
			<span className="badge span-cantidad">{cantidad}</span>
		</Button>
	);
};

export default CartWidget;