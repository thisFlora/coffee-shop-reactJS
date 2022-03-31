import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Item = ({producto}) => {
	return (
		<Col>
			<Card style={{ width: "24rem" }} id={producto.id}>
				<Card.Img variant="top" src={producto.imagen} />
				<Card.Body>
					<Card.Title>
						{producto.nombre} | $ {producto.precio}
					</Card.Title>
					<div className="divider"></div>
				</Card.Body>
				<NavLink to={`/item/${producto.id}`}>
				<Button variant="outline-secondary" className="m-2">
					Ver Detalle del Producto
				</Button>
				</NavLink>
			</Card>
		</Col>
	);
};

export default Item;