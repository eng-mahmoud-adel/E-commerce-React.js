import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/actions/products';

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(emptyCart());
        props.onHide(false);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Personal Information
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" pattern="^01[0-2]\d{1,8}$" placeholder="Enter phone" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
  }
  
function BaseModal({ products }) {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        {products.length !== 0 && <Button variant="primary" className="w-100 my-5" onClick={() => setModalShow(true)}>
          Order Now
        </Button>}
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}
export default BaseModal;
