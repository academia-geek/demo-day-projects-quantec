
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm';
import { editAimsAsyn } from '../redux/actions/aimsAction';

const EditModal = ({modal}) => {
    const dispatch = useDispatch();
    console.log(modal);
    const {aims} = useSelector(store => store.aims)

    const[show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const[values, handleInputChange, reset] = useForm({
        accu: modal.accu
    })
    const {accu, idDocument} = values;
    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editAimsAsyn(idDocument, values))
    }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
                    
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Cuánto quieres abonar:  </Form.Label>
                        <Form.Control type="value" 
                            placeholder='' 
                            name='accu'
                            onChange={handleInputChange} />
                                       
                    </Form.Group>
                    
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Form>

            </Modal.Body>


        </Modal>
    </div>
  )
}

export default EditModal