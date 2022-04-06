
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { alertPointsSuccess } from '../helpers/alerts';
import { useForm } from '../hooks/useForm';
import { editAimsAsyn } from '../redux/actions/aimsAction';
import { editUserAsyn } from '../redux/actions/userAction';
import { ButtonClose, ButtonM } from '../styled/EditModalStyled';

const EditModal = ({modal, modalShow, setModal}) => {
    const auth = getAuth()
    const user = auth.currentUser
    
    const {users} = useSelector(store => store.user)
    
    const dispatch = useDispatch();
       
    const handleClose = () => setModal(false);
    
    const[values, handleInputChange, reset] = useForm({
        accu: modal.accu,
        date1: modal.date1,
        date2: modal.date2,
        quantity: modal.quantity,
        idDocument: modal.idDocument,
        aim: modal.aim
    })
    const {accu, idDocument, date1, date2, quantity} = values;
    console.log(values);

    const handleSubmit = (e) => {
        e.preventDefault();
        values.accu = (parseInt(values.accu) + (modal.accu === undefined ? 0 : parseInt(modal.accu))).toString();
        dispatch(editAimsAsyn(idDocument, values, modal.user))
        userData()
        handleClose()
    }
    
    const userData = () => {
        
        const userDatos = {
            ...users,
            puntos: users.puntos + 5,
            
        }
        dispatch(editUserAsyn(user.email, userDatos))
        alertPointsSuccess('😃 Haz ganado 5 puntos de Exp!')
    }
  return (
    <div>
        <Modal show={modalShow} onHide={handleClose}>
                    
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><b>Cuánto quieres abonar: </b> </Form.Label>
                        <Form.Control type="value" 
                            placeholder='' 
                            name='accu'
                            onChange={handleInputChange} />
                        <hr/>
                        <div>
                        <h6>Mi objetivo</h6>
                        <Form.Control
                            value={modal.aim}
                            type="text" 
                            placeholder='Mi objetivo'
                            name='aim'
                            onChange={handleInputChange}
                        />
                        <h6>Fecha de Inicio</h6>
                        <Form.Control
                            value={modal.date1}
                            type="date" 
                            placeholder='Fecha inicial'
                            name='date1'
                            onChange={handleInputChange}
                        />
                        <h6>Hasta:</h6>
                        <Form.Control 
                            type="date" 
                            value={modal.date2}
                            placeholder='Fecha final'
                            name='date2'
                            onChange={handleInputChange}
                        />
                        <div>
                            <h6>Quiero ahorrar:</h6>

                            <Form.Control 
                                type="value" 
                                value={modal.quantity}
                                placeholder='' 
                                name='quantity'
                                onChange={handleInputChange}
                            />
                        </div>
                        </div>                 
                    </Form.Group>
                    
                    <ButtonClose variant="secondary" onClick={handleClose}>
                        Cerrar
                    </ButtonClose>
                    <ButtonM type="submit" variant="primary"  className='mx-2'>
                        Guardar Cambios
                    </ButtonM>
                </Form>

            </Modal.Body>


        </Modal>
    </div>
  )
}

export default EditModal