
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAimsAsyn} from '../redux/actions/aimsAction';
import { Ahorro, Aims, ContainerAims, DivInfo, DivInfoS, Edit, Final, H3, Inicial, Meta, MiAhorro, Progress, Values, VerMas } from '../styled/NewAimsStyled';
import "../styles/newAim.css"
import DeleteForever from '@mui/icons-material/DeleteForever';
import EditModal from './EditModal';
import { ToastContainer, toast } from 'react-toastify';
import { alertPointsError } from '../helpers/alerts';
import { getAuth } from 'firebase/auth';
import { editUserAsyn, loadUserDate } from '../redux/actions/userAction';
const NewAims = () => {

    const auth = getAuth()
    const user = auth.currentUser
    
    const {users} = useSelector(store => store.user)

    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState([]);    
    
    const { aims } = useSelector(store => store.aims)      
        
    const editAims = (idDocument) => {
        
        const filterAims = aims.find(a => a.idDocument === idDocument)
        
        setModal(true)
        setEditModal(filterAims)
    }
    const deleteAims = (idDocument) => {
        dispatch(deleteAimsAsyn(idDocument))
        userData()
    }
   
    const userData = () => {
        
        const userDatos = {
            ...users,
            puntos: users.puntos - 5,            
        }
        dispatch(editUserAsyn(user.email, userDatos))
        dispatch(loadUserDate(user.uid))
        alertPointsError()
    }
    return (
        <div>
            <center>
                {
                    aims.map((a, index) => (
                        <ContainerAims key={index}>
                            <DivInfoS>
                                <DivInfo>
                                    <H3>
                                        {a.aim}
                                    </H3>
                                    <Edit type='button'
                                        onClick={() => editAims(a.idDocument)}
                                    >
                                        <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648680087/proyecto-final/clarity_edit-line_x2nsaf.svg" alt="" />
                                    </Edit >
                                </DivInfo>
                                <VerMas type='button'
                                    onClick={() => deleteAims(a.idDocument)}
                                >
                                    <DivInfo>
                                        <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648680089/proyecto-final/clarity_trash-line_ihgzqm.svg" alt="" />
                                        Eliminar
                                    </DivInfo>
                                </VerMas>
                            </DivInfoS>

                            <div className='mt-3'>
                                <Values>
                                    <MiAhorro>Mi ahorro</MiAhorro>
                                    <Meta>Mi meta</Meta>
                                </Values>
                                <Progress now={a.accu *100 / a.quantity} />
                                <Values>
                                    <Inicial>${a.accu}</Inicial>
                                    <Final>${a.quantity}</Final>
                                </Values>

                            </div>
                        </ContainerAims>
                    ))
                }


<ToastContainer />
            </center>
            {
                modal === true ? <EditModal modal={editModal} modalShow={modal} setModal={setModal}/> : ''
            }

        </div>
    )
}

export default NewAims