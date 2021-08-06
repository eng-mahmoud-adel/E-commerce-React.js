import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Badge } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import '../../sass/layout/_header.scss';

const BaseNavbar = ({ keyword, onChange}) => {
    const {products, amountOfProducts} = useSelector(state => state.addProductToCart);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <NavLink to="/" className="nav-link text-white">
                        E-Commerce
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <input type="text" placeholder="Search by gategory" className="w-100 py-1 px-2" value={keyword} onChange={onChange} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to="/" className="nav-link active">
                                Products
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/cart" className="nav-link active">
                                Cart
                            </NavLink>
                        </Nav.Link>
                        <NavDropdown title={
                            <>
                                <FaCartPlus size={28} />
                                <Badge>{amountOfProducts}</Badge>
                            </>
                        } id="basic-nav-dropdown" className="pt-2">
                            {products.map(product =>  
                                <NavDropdown.Item>
                                    <img src={product.image} alt="" />
                                    <button onClick={() => history.push('/cart')}>Review Order</button>
                                </NavDropdown.Item>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <img className="profile-pic" src="https://media.istockphoto.com/photos/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily-picture-id923852236?k=6&m=923852236&s=612x612&w=0&h=yhDRcow62oft0e40RpIm9BcFXPbEFr2YmqVZrzfMcT0=" />
        </Navbar>
    )
}

export default BaseNavbar;
