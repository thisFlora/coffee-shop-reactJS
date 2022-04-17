import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


export const ItemCheckout = ({producto}) => {

return (
     <>   
          <Container className="d-flex m-auto mb-1 p-1 justify-content-between border checkout-item">
			<Row>
                    <Col>
                    <img className="imgCart" src={producto.product.imagen} alt="producto"/>
                    </Col>
                    <Col>
                    <strong>{producto.product.nombre}</strong>
				<p className="m-0">
					<strong>Cantidad:</strong> {producto.count}
				</p>
				<p className="m-0">
					<strong>Precio:</strong>$ {producto.product.precio}
				</p>
                    </Col>
			</Row>
		</Container>
     </>

)
}
