import React from 'react'
import { Container, ContainerP, H5, Img, P } from '../styled/LoggedHome'
const LoggedHome = () => {

    return (
        <Container className={"loggedhome"}>

            <ContainerP>
                <H5>Descubre el potencial de tus finanzas </H5>

                <center><Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1647560244/images/Prueba-Tecnica/undraw_designer_re_5v95_1_g93dek.svg' /></center>
                <P>Encuentra proximamente herramientas y contenido para que contruyas el estilo de vida que sueñas y te mereces.<br />
                    Lo que pase aquí y ahora definirá tu futuro. </P>


            </ContainerP>

        </Container>
    )
}

export default LoggedHome