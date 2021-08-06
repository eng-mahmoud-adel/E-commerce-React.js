import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BaseNavbar from '../../components/navbar/Navbar';
import { getSingleProduct, removeSingleProduct } from '../../redux/actions/products';
import { Col, Card, Button } from 'react-bootstrap';
import Product from '../../components/cards/Product';

const SingleProduct = () => {
    const {id} = useParams();
    
    const {product} = useSelector(state => state.singleProduct);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(id));

        return() => {
            dispatch(removeSingleProduct());
        }

    }, [dispatch, id]);

    return (
        <div>
            <BaseNavbar />
            
            <Col md={6} className="my-3 mx-auto">
                <Product product={product} />
            </Col>
        </div>
    )
}

export default SingleProduct;
