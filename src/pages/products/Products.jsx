import React, { useEffect, useState } from 'react';
import BaseNavbar from '../../components/navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct, getProducts, addProductToCart } from '../../redux/actions/products';
import { Container, Row, Col } from 'react-bootstrap';
import '../../sass/pages/_products.scss';
import { useHistory } from 'react-router-dom';
import Product from '../../components/cards/Product';

const Products = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());

    }, [dispatch, getProducts]);

    const {products} = useSelector(state => state.products);
    const {products: productsInCart} = useSelector(state => state.addProductToCart);
    
    const history = useHistory();

    const showProduct = (id) => {
        dispatch(getSingleProduct(id));
        history.push(`/product/${id}`);
    }

    const addToCart = (id) => {
        let productExist = productsInCart.findIndex((product) => product.id == id);
        if(productExist == -1) {
            dispatch(addProductToCart(id));
        }
    }

    const [keyword, setKeyword] = useState('')
    
    return (
        <>
            <BaseNavbar keyword={keyword} onChange={(e) => setKeyword(e.target.value)} />

            <Container className="pt-5">
                <Row>
                    {products.filter(product => {
                        if(keyword == '') return product;
                        else if(product.category.toLowerCase().includes(keyword.toLowerCase())) return product;
                    }).map(product => (
                        <Col md={6} lg={4} key={product.id} className="my-3">
                            <Product product={product} showProduct={showProduct} addToCart={addToCart} />
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </>
    )
}

export default Products;
