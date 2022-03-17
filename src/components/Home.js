import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Footer from './Footer'
import NavBar from './NavBar'
const Home = () => {
    return (
        <div>
            <NavBar />
            <Line1>
                <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647471481/proyecto-final/Group_1_r5nm9t.svg" alt="" />
                <H3>ALCANZA TUS OBJETIVOS</H3>
            </Line1>
            <center>
                <Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647471368/proyecto-final/Group_2147_ukltzb.svg" alt="" />
            </center>
            <div>
                <H1>Ponle un objetivo a tu día día</H1>
                <H3>Con la opción de “objetivos”, alcanza cada una de las cosas que te propones; ya que solo debes tener tu objetivo claro y la app se encargará de recomendarte cuanto debes ahorrar para que alcances tus metas.</H3>
            </div>
            <center>
                <Link to={"/welcome"}><CustomButton>
                    <H2>Abrir mi cuenta</H2>
                </CustomButton></Link>
            </center>

            <div>
                <Line1>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647471481/proyecto-final/Group_1_r5nm9t.svg" alt="" />
                    <H3>SEGURIDAD ABSOLUTA</H3>
                </Line1>
                <center>
                    <Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647478186/proyecto-final/Group_2148_wm57ov.svg" alt="" />
                </center>
                <div>
                    <H1>No es solo una cuenta como las demas, sino también una cuenta segura para tus objetivos</H1>
                    <H3>La cuenta Quantec está diseñada para que tu sea el único que puede usarla. La tecnología le permite que se abran cuantos objetivos quieras, sin permitirte retirar tus ahorros hasta que logres alcanzarlos.
                        Con Quantec, puedes personalizar reglas simples para automatizar tus ahorros, lo que te permite controlar y visualizar  como  tus metas se hacen realidad.</H3>
                </div>

                <center> <ImgReg src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647478840/proyecto-final/Section_3_byuzen.svg" alt="" /></center>


            </div>
            <Footer />
        </div>
    )



}
const Line1 = styled.div`
display:flex;
color:#798390;
margin-top:20px;
margin-bottom:20px;
h3{
  margin-left:40px

}


`

const H1 = styled.h1`
font-size:22px;
font-weight:900;
line-height:34.13px;
letter-spacing:-0.3px;
text-align: left
`
export const H2 = styled.h2`
color:white;
font-weight:700;
font-size:16px;
line-height:24px;
letter-spacing: -0.3px;
margin-bottom:0;
`
const H3 = styled.h3`
font-size:16px;
font-weight:500;
line-height:24px;
letter-spacing:-0.3px;
color:#6F6F70;
text-align: justify;
  
`
const Img = styled.img`
margin-bottom:15px`


export const CustomButton = styled.button`
width:330px;
height:44px;
background-color:#3C1280;
border:none;
border-radius:20px;
align-items: center;
margin-top:24px;
`
const ImgReg = styled.img`

width:325px`
export default Home