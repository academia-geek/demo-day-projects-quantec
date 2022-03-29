import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {deleteAimsAsyn} from '../redux/actions/aimsAction'
import { store } from '../redux/store/store'

const VerMas = () => {

  const location = useLocation();    
    const {id} = location.state
    console.log(id);
    const dispatch = useDispatch();
    const handleDelete = () => {
      dispatch(deleteAimsAsyn(id))
    }
  return (
    <div>
        <div>
            <h6>¿Qué acción quieres realizar?</h6>
            <button type='button'>Editar</button>
            <button type='button' onClick={handleDelete}>Eliminar</button>
        </div>
    </div>
  )
}

export default VerMas