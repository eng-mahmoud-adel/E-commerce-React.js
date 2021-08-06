import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const ProductInCart = ({ product, showProduct }) => {
    const [value, setValue] = useState(1);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        if(e.target.value < 1) {
            setError("Sorry, please enter a positive number");
        }
    }

    return (
        <>
        <Card className="product">
            <Card.Img variant="top" src={product.image} onClick={() => showProduct(product.id)} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="d-flex justify-content-between">
                    <p><strong>Category:</strong> {product.category}</p>
                    <strong>{product.price} EGP</strong>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-baseline bg-white border-top-0 pb-0">
                <input type="number" className="w-50 pl-2" defaultValue={value} min="1" onChange={handleChange} />
                <p><strong>Total:</strong> {value * product.price} EGP</p>
            </Card.Footer>
            <p className="pl-3 text-danger font-weight-bold">{value < 1 && error}</p>
        </Card>
        </>
    )
}

export default ProductInCart;
