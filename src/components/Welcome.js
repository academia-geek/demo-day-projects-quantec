import React from 'react'
import styled from "styled-components"
//tiempo para encender tus finanzas
//en construccion
import "../styles/welcome.css"
import "../styles/blackCards.css"
const Welcome = () => {
    return (
        <Document><H2>Tiempo para encender
            tus finanzas</H2>
        </Document>
    )
}
export const Document = styled.div`
background-color:#1C1C1E`
export const H2 = styled.h2`

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
text-align: center;
letter-spacing: -0.3px;
color:white`


export default Welcome