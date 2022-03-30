import React, { useEffect } from 'react'
import { Container, ContainerP } from '../styled/LoggedHome'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import { getAuth } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../redux/store/store'
import { listTipsAsyn } from '../redux/actions/tipsAction'
const LoggedHome = () => {

    const auth = getAuth()
    const user = auth.currentUser;

    const dispatch = useDispatch();

    const { tips } = useSelector(store => store.tips)

    useEffect(() => {
        dispatch(listTipsAsyn())
    }, [])
    // console.log(tips);


    return (
        <Container className={"loggedhome"}>

            <ContainerP>

                <TitleContainer>
                    <HomeTitle>
                        <H4Home>Hola,</H4Home>
                        <H2Name>{user.displayName}</H2Name>
                    </HomeTitle>
                    <HomeImg src={user.photoURL} alt="foto del perfil" width="64" height="64" />

                </TitleContainer>
                <Phome>Aquí tienes un resumen de tus objetivos y algunos tips para mejorar tu ahorro</Phome>
                <AimsTitle>
                    <H5Aims>Mis objetivos</H5Aims>
                    <Link to={"/loggedaims"} style={{ textDecoration: "none" }}>
                        <VerMasH6>
                            Ver más
                        </VerMasH6>
                    </Link>
                </AimsTitle>




                <AimsHome>
                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648420406/proyecto-final/undraw_exploring_re_grb8_1_kichbi.svg" alt="imagen" width="124px" height="109px" />
                    <HomeContainer>
                        <Phome>Empiezas por contarnos que objetivo te gustaría alcanzar sea de corto, mediano o largo plazo.</Phome>
                        <Link to={"/plusaimtype"}>
                            <MiniBtn>
                                Agregar un objetivo
                            </MiniBtn>

                        </Link>
                    </HomeContainer>

                </AimsHome>

                <AimsTitle>
                    <H5Aims>Tips</H5Aims>
                    <Link to={"/loggedacc"} style={{ textDecoration: "none" }}> <VerMasH6>Ver más</VerMasH6></Link>

                </AimsTitle>
                <Cards>
                    <CardShape >


                        <Tip1>texto</Tip1>


                    </CardShape>

                    <CardShape2>

                        <Tip2>texto2</Tip2>
                    </CardShape2>
                </Cards>


            </ContainerP>

        </Container>
    )
}
const TitleContainer = styled.div`
display:flex;
margin:0px 23px;
align-items:center;
`
const MiniBtn = styled.button`
margin-left:19px;
margin-bottom:18px;
color:white;
background-color:#3C1280;
border:none;
border-radius:20px;
align-items: center;
width: 167px;
height: 32px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 24px;
/* identical to box height, or 200% */
letter-spacing: -0.3px;
color: #FFFFFF;
`
const HomeContainer = styled.div`
display:flex;
flex-direction: column;`
const HomeTitle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
margin-top:32px;
`

const HomeImg = styled.img`
margin-left:50%;
margin-top:10%;
border-radius: 50%;
`
const H4Home = styled.h4`
margin:0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
margin-bottom:8px;
/* identical to box height, or 171% */
letter-spacing: -0.3px;
color: #5E5E5E;
`
const H2Name = styled.h2`font-family: 'Montserrat';
margin:0;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: -0.3px;
color: #1A1A1A;
`
const Phome = styled.p`
margin:18px 25px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 18px;
color: #8D8A8A;
`
const H5Aims = styled.h5`
margin-top:32px;
margin-bottom:24px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
width:115px;
/* identical to box height */
letter-spacing: -0.3px;
color: #1A1A1A;
`
const VerMasH6 = styled.h6`
margin-top: 17%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
width:208px;
text-align:right;
/* identical to box height */
letter-spacing: -0.3px;
color: #C4C4C4;`
const AimsTitle = styled.div`
margin:0px 23px;
display:flex;`

const AimsHome = styled.div`
display:flex;
width: 327px;
height: 141px;
background: white;
box-shadow:0px 0px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
margin:0px 25px;
align-items:center;
`

const Cards = styled.div`
margin:0px 25px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px;`

const CardShape = styled.div`
width: 150px;
height: 105px;
background-image:url("https://res.cloudinary.com/dn1jeryp3/image/upload/v1648659959/proyecto-final/Card_tip_jxwtpi.svg")`

const CardShape2 = styled.div`
width: 150px;
height: 105px;
background-image:url("https://res.cloudinary.com/dn1jeryp3/image/upload/v1648659959/proyecto-final/Card_tip_1_ma5pp9.svg")`

const CardShapeBg = styled.div`
background-color: #3C1280;
height:100%;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius: 10px;
`
const CardImg = styled.img`
float:right;
position: relative;
bottom: 6%;
`
const TipArrow = styled.img`
float:right;
position: relative;
left: 52%;
top: 27%;
`
const Tip1 = styled.h6`
position:relative;
top:35%;
padding-left:10%;
padding-bottom:11%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 16px;
/* or 160% */
color: #FFFFFF;
`
const Tip2 = styled.h6`
position: relative;
top:30%;
padding-left:10%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 16px;
/* or 160% */
color: #3C1280;`
export default LoggedHome