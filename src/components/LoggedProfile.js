import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAsyn } from '../redux/actions/loginAction'
import { Contenedor, ImageProfile, Nombre } from '../styled/LoggedProfileStyled'
import styled from 'styled-components'
import "../styles/logged.css"
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'

const LoggedProfile = () => {
    const dispatch = useDispatch();

    const auth = getAuth()
    const user = auth.currentUser
    const { users } = useSelector(store => store.user)

    const handleLogout = () => {
        dispatch(logoutAsyn())
    }
    return (
        <Contenedor>
            <ButtonLogout
                type='button'
                onClick={handleLogout}>
                <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648218787/proyecto-final/carbon_logout_vy6qvj.svg" alt="" />
                Cerrar Sesión
            </ButtonLogout>
            <center>

                <Profile>
                    <ImageProfile src={user.photoURL} />

                    <Nombre>{user.displayName}</Nombre>

                    <Puntos>
                        <PointsConainer>
                            <TropheeNPoints>
                                <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648225398/proyecto-final/Trofeo_xrl04s.svg" alt="" />

                                <h6>{users.puntos} puntos Exp  </h6>
                            </TropheeNPoints>
                            <Link to="/redeem"
                                style={{ color: "#3C1280", textDecoration: "none" }}>
                                Redimir
                            </Link>
                        </PointsConainer>

                    </Puntos>


                </Profile>
            </center>

            <center>
                <AchievementsBox>
                    <h3>Logros</h3>
                    <h4>Suma 20 puntos Exp cada vez que alcances un logro</h4>

                    <ProfileHr />
                    <Achievements>

                        <Achievement>
                            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648220410/proyecto-final/Group_3585_ixlm8u.svg" alt="" />
                            <H6>Crea tu primer
                                objetivo</H6>

                        </Achievement>
                        <Achievement>
                            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648220410/proyecto-final/Group_3585_ixlm8u.svg" alt="" />
                            <H6>Finaliza tu primer
                                objetivo</H6>

                        </Achievement>
                        <Achievement>
                            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648220410/proyecto-final/Group_3585_ixlm8u.svg" alt="" />
                            <H6>Finaliza 10
                                objetivos</H6>

                        </Achievement>
                        <Achievement>
                            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648220410/proyecto-final/Group_3585_ixlm8u.svg" alt="" />
                            <H6>Finaliza 50
                                objetivos</H6>

                        </Achievement>
                        <Achievement>
                            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648220410/proyecto-final/Group_3585_ixlm8u.svg" alt="" />
                            <H6>Finaliza 100
                                objetivos</H6>

                        </Achievement>
                        <Achievement>
                            <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648220410/proyecto-final/Group_3585_ixlm8u.svg" alt="" />
                            <H6>Finaliza 200
                                objetivos</H6>

                        </Achievement>
                    </Achievements>

                </AchievementsBox>
            </center>

        </Contenedor>



    )
}
const TropheeNPoints = styled.div`
display:flex;
align-items:center;`
const PointsConainer = styled.div`
display:grid;
margin-bottom:-10px`
const ButtonLogout = styled.button`
background-color:rgba(255,255,255,0);
border:none;
position:absolute;
right:0;
color:hsla(263, 75%, 29%, 1);
align-items:center;
margin-top:24px;
margin-right:24px;`

const AchievementsBox = styled.div`
width:327px;
height:293px;
border-radius:8px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius: 8px;


h3{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
padding-top:15px;
text-align: left;
color: #757575;
margin-left:16px;
}
h4{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 24px;

letter-spacing: -0.3px;

color: #8D8A8A;
text-align:left;
margin-left:16px;
}
`
const ProfileHr = styled.hr`
width:90%`

const Profile = styled.div`
margin-bottom:21px;`

const Achievements = styled.div`
margin-left:16px;
justify-content: center;
align-items: center;
display: grid;
  grid-template-columns: repeat(3,80px);  /* 3 columns */
  grid-template-rows: repeat(2,80px); /* 3 rows  */
  grid-gap:20px 30px; /* 50 pixels of space added between rows and 30 pixels added between columns  */

`
const Achievement = styled.div`
width: 60px;
height: 88px;/* 3 rows  */
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    height:60px;
    width:60px;

}`

const H6 = styled.h6`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
letter-spacing: -0.3px;
width:72px;


color: #8D8A8A;
margin-bottom:19.1%;
`

const Puntos = styled.div`
display:flex;
justify-content:center;
align-items:center;
h6{
    color:#8D8A8A;
   
}`

const InfoContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0 88px;`
export default LoggedProfile