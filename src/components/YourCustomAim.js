import { ActionCodeURL, getAuth, updateCurrentUser, updateProfile } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { addAimsAsyn } from '../redux/actions/aimsAction'
import { updateUserAsyn } from '../redux/actions/registerAction'
import { editUserAsyn, listUserAsyn } from '../redux/actions/userAction'
import { RegisterForm } from './RegisterAccount'
import { BlackCards, CustomButtonCards, CustomLink, H2, H3 } from './Welcome'

const YourCustomAim = () => {
    const auth = getAuth()
    const user = auth.currentUser
    
    const {users} = useSelector(store => store.user)
    
    
    const location = useLocation();    
    const {aims} = location.state
    
    const dispatch = useDispatch();
    const navigate = useNavigate();      

    const [newAims, setNewAims] = useState({
        aim: '',
        date1: '',
        date2: '',
        quantity: '',
        time: '',
        user: '',
        accu: ''
    })
    useEffect(() => {
      newAimsAsingna()
      dispatch(listUserAsyn())
    }, [])
    
    const newAimsAsingna = () => {
        setNewAims({
            aim: aims,
            user: user.displayName,
            accu: '0'
        })
    }    
    
    const handleInputChange = ({target}) => {
        setNewAims({            
            ...newAims,
            [target.name]: target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        pointsUser()
        dispatch(addAimsAsyn(newAims));        
        navigate('/loggedaims')
    }
    const pointsUser = () => {
        console.log('aqui toy');
        const userActive = users.find(u => u.email === user.email)
        console.log(userActive);               
                     
        userData(userActive)    
        
    }
    const userData = (userActive) => {
        
        const userDatos = {
            nombre: userActive.nombre,
            email: userActive.email,
            puntos: userActive.puntos + 5,
            photoURL: userActive.photoURL
        }
        dispatch(editUserAsyn(user.email, userDatos))
    }
    
    return (
        <BlackCards className="password" >
            <CustomLink to={"/plusaimtype"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <RegisterForm style={{ marginTop: '35px', marginLeft: "0" }}
                onSubmit={handleSubmit}
            >
                <H2 >Personaliza tu objetivo</H2>

                <H3>Mi objetivo va desde:</H3>

                <InputAim 
                    type="date" 
                    placeholder='Fecha inicial'
                    name='date1'
                    onChange={handleInputChange}
                />
                <H3>Hasta:</H3>
                <InputAim 
                    type="date" 
                    placeholder='Fecha final'
                    name='date2'
                    onChange={handleInputChange}
                />
                <SelectDiv>
                    <H3>Quiero ahorrar:</H3>

                    <InputAim 
                        type="value" 
                        placeholder='' 
                        name='quantity'
                        onChange={handleInputChange}
                    />
                </SelectDiv>
                <H3>Y quiero alcanzarlo ahorrando cada:</H3>
                <SelectDiv>
                    <InputAim 
                        type="value" 
                        placeholder='' 
                        name='time'
                        onChange={handleInputChange}
                    />
                    <H3>días</H3>
                </SelectDiv>
                <center>
                    <CustomButtonCards type='submit'>
                        Continuar
                    </CustomButtonCards>
                </center>
            </RegisterForm>
            
        </BlackCards>
    )
}
const InputAim = styled.input`
margin-left: 5%;
`
const SelectDiv = styled.div`
display:flex;
align-items: center;
input{
    width:100px;
    height:30px;
    
}
`

export default YourCustomAim