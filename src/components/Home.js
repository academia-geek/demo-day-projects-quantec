import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import NavBar from './NavBar'
const Home = () => {
    return (
        <div className="box">
            <div className="content">
                <NavBar />
                <Line1>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647471481/proyecto-final/Group_1_r5nm9t.svg" alt="" />
                    <H3>CON QUANTEC PUEDES</H3>
                </Line1>
                <center>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647532695/proyecto-final/undraw_vault_re_s4my_1_vkhyit.svg" alt="" />
                </center>
                <Line1>
                    Comenzar a ahorrar
                </Line1>

                <H3>Con disciplina, dedicación, atención adecuada a tu presupuesto y el uso de Quantect, ¡pronto podrás ahorrar mucho más dinero de lo que alguna vez imaginaste!</H3>
                <center>
                    <Link to={"/register"}>
                        <CustomButton>
                            <H2>Registrate ahora</H2>
                        </CustomButton>


                    </Link>
                    <p></p>
                    <LinkLoggin to={"/login"} style={{ color: "#3C1280" }}>Iniciar sesión</LinkLoggin>
                </center>

                <Line1>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647471481/proyecto-final/Group_1_r5nm9t.svg" alt="" />
                    <H3>ALCANZA TUS OBJETIVOS</H3>
                </Line1>
                <center>
                    <Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1649164088/proyecto-final/Group_2147_nkwklt.svg" alt="" />
                </center>
                <div>
                    <H1>Ponle un objetivo a tu día día</H1>
                    <H3>Con la opción de “objetivos”, alcanza cada una de las cosas que te propones; ya que solo debes tener tu objetivo claro y la app se encargará de recomendarte cuanto debes ahorrar para que alcances tus metas.</H3>
                </div>


                <div>


                    <center> <ImgReg src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647478840/proyecto-final/Section_3_byuzen.svg" alt="" /></center>


                </div>
                <footer><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647479334/proyecto-final/Footer_qx2qyk.svg" alt="" /></footer>
            </div>
        </div>
    )



}
const Line1 = styled.div`
display:flex;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 34px;
letter-spacing: -0.3px;




color: #333333;
margin-top:20px;
margin-bottom:20px;
margin-left:30px;

h3{
  margin-left:40px

}
img{
    margin-right:-30px
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
color:inherit;
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
padding-bottom:0;
  
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
color:white;
`
const ImgReg = styled.img`
margin-bottom:30px;
width:325px`
const LinkLoggin = styled(Link)`
color:#3C1280;
text-decoration:none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;`
export default Home