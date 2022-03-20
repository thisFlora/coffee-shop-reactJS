import React from "react";
import Item from "./Item";
import { Container, Row, Spinner } from "react-bootstrap";

const ItemList = ({productos, loading}) => {
	return (
		<Container className= "justify-content-center">
			{loading && <Spinner animation="border" variant="primary" />}
			{!loading && (
				<Row xs={1} md={2} xl={3} className="g-4">
					{productos.map((producto) => {
						return <Item producto={producto} key={producto.id} />;
					})}
				</Row>
			)}
		</Container>
	);
};

export default ItemList;