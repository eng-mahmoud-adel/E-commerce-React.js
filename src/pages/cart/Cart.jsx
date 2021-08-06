import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BaseNavbar from '../../components/navbar/Navbar';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { getSingleProduct } from '../../redux/actions/products';
import { useHistory } from 'react-router-dom';
import BaseModal from '../../components/modal/Modal';
import ProductInCart from '../../components/cards/ProductInCart';

const Cart = () => {
    const {products, submitted} = useSelector(state => state.addProductToCart);

    const dispatch = useDispatch();
    const history = useHistory();

    const showProduct = (id) => {
        dispatch(getSingleProduct(id));
        history.push(`/product/${id}`);
    }

    const [keyword, setKeyword] = useState('');

    return (
        <div>
            <BaseNavbar keyword={keyword} onChange={(e) => setKeyword(e.target.value)} />

            <Container className="pt-5">
                <Row>
                    {products.length == 0 && submitted ?

                    <Alert variant="success" className="w-100 text-center">Submitted Successfully</Alert>
                    :
                    products.filter(product => {
                        if(keyword == '') return product;
                        else if(product.category.toLowerCase().includes(keyword.toLowerCase())) return product;
                    }).map(product => (
                        <Col md={6} lg={4} key={product.id} className="my-3">
                            <ProductInCart product={product} showProduct={showProduct} />
                        </Col>
                    ))}
                </Row>
                
                <BaseModal products={products} />
            </Container>
        </div>
    )
}

export default Cart;
