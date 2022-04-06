import React from 'react'
import styled from "styled-components"
const InfoAimsNone = () => {
  return (
    <div>
      <H4>Aún no tienes ningun objetivo</H4>
      <center>
        <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648420406/proyecto-final/undraw_exploring_re_grb8_1_kichbi.svg" width="238" height="209"
          alt="" />
      </center>
      <H6>En Quantect creemos que por medio de objetivos puedes alcanzar todas tus metas de corto, mediano y largo plazo.

        ¿Porqué no empiezas por contarnos que objetivo te gustaría alcanzar?</H6>
    </div>
  )
}
const H4 = styled.h4`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
text-align: center;
letter-spacing: -0.3px;


`
const H6 = styled.h6`
margin: 32px 24px 0px ; 
font-weight: 400;
font-size: 16px;
line-height: 20px;

color: #8D8A8A;`
export default InfoAimsNone