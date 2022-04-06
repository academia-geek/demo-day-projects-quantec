
import { getAuth } from 'firebase/auth'
import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { alertPointsError, alertPointsSuccess } from '../helpers/alerts'
import { editUserAsyn, loadUserDate } from '../redux/actions/userAction'
import { ButtonClose, ButtonM } from '../styled/EditModalStyled'
import { DivInfoPoints, DivRedeemPoints, H3, H6Points } from '../styled/RedeemPointsStyled'
import { Card, H6, Imagen, Title } from '../styled/RedeemStyled'

const RedeemPoints = ({modal, modalShow, setModal}) => {

    const dispatch = useDispatch();

    const handleClose = () => setModal(false);

    const auth = getAuth()
    const user = auth.currentUser

    const {users} = useSelector(store => store.user)
    console.log(users);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(users.puntos, modal.puntos);
        if(users.puntos === parseInt(modal.puntos)){
        userData()
        }else{
            alertPointsError('Oops, te faltan puntos!! Sigue esforzandote!! 💪')
        }
    }
    
    const userData = () => {        
        
        console.log('aqui toy');
        const userDatos = {
            ...users,
            puntos: users.puntos - modal.puntos,  
            product: {...modal.titulo}          
        }
        dispatch(editUserAsyn(user.email, userDatos))
        dispatch(loadUserDate(user.uid))
        alertPointsSuccess('🎉 Haz redimido tus puntos, sigue así!')
        
        
        
    }
  return (
    <div>
        
        <Modal show={modalShow} onHide={handleClose}>                    
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <DivRedeemPoints>
                                <Card className='card'>
                                    <Imagen src={modal.img} />
                                    <H6>{modal.punto}</H6>
                                    <Title>{modal.titulo}</Title>
                                </Card>
                                <DivInfoPoints>
                                    <H3>Deseas redimir este producto?</H3>
                                    <H6Points>Tus puntos <b>{users.puntos}</b></H6Points>
                                    <H6Points>Puntos productos <b>{modal.puntos}</b></H6Points>
                                    
                                </DivInfoPoints>  
                            </DivRedeemPoints>               
                            </Form.Group>
                            
                            <ButtonClose variant="secondary" onClick={handleClose} className='mx-4'>
                                Cerrar
                            </ButtonClose>
                            <ButtonM type="submit" className='mx-4' style={{width:120}}>
                                Redimir
                            </ButtonM>
                        </Form>
        
                    </Modal.Body>
        
        
                </Modal>           
        
    </div>
  )
}

export default RedeemPoints