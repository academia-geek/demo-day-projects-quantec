import React from 'react'
import { CustomLink } from './Aim'
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { registroEmailPasswordNombre } from '../redux/actions/registerAction'
import Swal from 'sweetalert2'
import "../styles/registeraccount.css"

const RegisterAccount = () => {
    const dispatch = useDispatch();
    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        password: ''
    });
    const {nombre, email, password} = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, email, password);
        dispatch(registroEmailPasswordNombre(email, password, nombre));
        reset();
    }
    const handleFileUp = () => {
        
    }
    return (
        <BlackCards className={"registerAccount"}>
            <CustomLink to={"/register"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Bienvenido</H2>
            <H3>Completa la siguiente información para poder conocerte y empezar a trabajar en tu plan financiero.</H3>
            <RegisterForm onSubmit={handleSubmit}>
                <H3>
                    Prefiero que me llamen:
                    <Name
                        name='nombre'
                        type="text"
                        placeholder="Tu nombre"
                        onChange={handleInputChange}    
                    />
                </H3>
                <H3>
                    Mi correo electrónico es:
                    <Mail
                        name='email'
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={handleInputChange}
                    />
                </H3>
                <H3>
                    Mi foto de perfil:
                    <Mail
                        name='photo'
                        type="file"
                        onChange={handleInputChange}
                    />
                </H3>       
                <H3>
                    Asigna la contraseña para ingresar a tu cuenta de Quantect
                    <Mail 
                        type="password" 
                        placeholder='Contraseña' 
                        name='password' 
                        onChange={handleInputChange}
                    />
                </H3>
                <center>
                <CustomButtonCards className="button" onClick={() => {
                    Swal.fire({
                        html: '<br/><br/><h4 >¡Tu cuenta ha sido creada correctamente!<h3><br/><img class="checked" src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647621171/proyecto-final/Group_349_v0ofdt.svg" alt=""/>',
                        showConfirmButton: false,
                        timer: 2000,
                    }).then(function () {
                        window.location = "/loggedhome";
                    });
                }}>
                    Guardar
                </CustomButtonCards>
            </center>
            </RegisterForm>

            

        </BlackCards>
    )
}
export const RegisterForm = styled.form`
display:flex;
flex-direction:column;




input{
    border:none;
    margin-bottom:10px;
    border-bottom:1px  solid gray;
    background-color:#1C1C1E;
    color:rgba(255,255,255,0.8);
    text-align:left;
    ::placeholder {
        color:rgba(255,255,255,0.4)
    }
}
h3{
    margin:0;
    padding-bottom:5%;
    justify-content: center;
    line-height: 2;
    text-align: left
}
`
const Name = styled.input`

width:160px;
padding-bottom:0;
margin-bottom:0;`

const Mail = styled.input``
export default RegisterAccount