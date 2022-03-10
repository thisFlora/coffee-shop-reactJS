import React from "react";
import Item from "./Item";
import { Container, Row, Spinner } from "react-bootstrap";

const ItemList = (props) => {
	return (
		<Container>
			{props.loading && <Spinner animation="border" variant="primary" />}
			{!props.loading && (
				<Row xs={1} md={2} xl={3} className="g-4">
					{props.productos.map((producto, indice) => {
						return <Item producto={producto} />;
					})}
				</Row>
			)}
		</Container>
	);
};

export default ItemList;