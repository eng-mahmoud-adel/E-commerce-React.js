import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Product = ({ product, showProduct, addToCart }) => {
    return (
        <Card className="product">
            <Card.Img variant="top" src={product.image} onClick={() => showProduct(product.id)} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="d-flex justify-content-between">
                    <p><strong>Category:</strong> {product.category}</p>
                    <strong>{product.price} EGP</strong>
                </Card.Text>
                <p>{product.description}</p>
            </Card.Body>
            <Card.Footer className="bg-white border-top-0">
                <Button variant="primary" onClick={() => addToCart(product.id)}>Add to Cart</Button>
            </Card.Footer>
        </Card>
    )
}

export default Product;
