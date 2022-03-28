import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteAimsAsyn} from '../redux/actions/aimsAction'

const VerMas = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {

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