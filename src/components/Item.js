import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import img from '../assets/img/mexico01.png'

const Item = (props) => {
	return (
		<Col>
			<Card style={{ width: "24rem" }}>
				<Card.Img variant="top" src= {img} />
				<Card.Body>
					<Card.Title>
						{props.producto.nombre} | $ {props.producto.precio}
					</Card.Title>
					<div className="divider"></div>
				</Card.Body>
				<Button variant="outline-primary" className="m-2">
					Ver detalle
				</Button>
			</Card>
		</Col>
	);
};

export default Item;