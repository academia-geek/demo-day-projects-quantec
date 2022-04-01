import React from 'react';
import { CustomLink } from './Aim';
import { BlackCards, CustomButtonCards, H2, H3 } from './Welcome';
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../redux/actions/registerAction';
import "../styles/registeraccount.css";
import { fileUpload } from '../helpers/fileUpLoad';
import { useFormik } from 'formik';
import { addUserAsyn } from '../redux/actions/userAction';

const RegisterAccount = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            displayName: '',
            email: '',
            password: '',
            photoURL: ''
        },
        onSubmit: (data) => {
            console.log(data.email);

        dispatch(registroEmailPasswordNombre(data));
        dispatch(addUserAsyn(data));
        }
    });


    const handleFileUp = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <BlackCards className={"registerAccount"}>
            <CustomLink to={"/register"}><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" /></CustomLink>
            <H2>Bienvenido</H2>
            <H3>Completa la siguiente información para poder conocerte y empezar a trabajar en tu plan financiero.</H3>
            <RegisterForm
                onSubmit={formik.handleSubmit}
            >
                <H3>
                    Prefiero que me llamen:
                    <Name
                        name='displayName'
                        type="text"
                        placeholder="Tu nombre"
                        onChange={formik.handleChange}
                    />
                </H3>
                <H3>
                    Mi correo electrónico es:
                    <Mail
                        name='email'
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={formik.handleChange}
                    />
                </H3>
                <H3>
                    Mi foto de perfil:
                    <Mail
                        name='photoURL'
                        type="file"
                        onChange={handleFileUp}
                    />
                </H3>
                <H3>
                    Asigna la contraseña para ingresar a tu cuenta de Quantect
                    <Mail
                        type="password"
                        placeholder='Contraseña'
                        name='password'
                        onChange={formik.handleChange}
                    />
                </H3>
                <center>
                    <CustomButtonCards className="submit">
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

const Mail = styled.input`
color:red`
export default RegisterAccount