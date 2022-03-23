import React from 'react'
import { Container, ContainerP, H5, Img, P } from '../styled/LoggedHome'
import SaldoCuentas from './SaldoCuentas'
<<<<<<< HEAD
=======

>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489
const LoggedHome = () => {
    return (
        <Container>
            <SaldoCuentas />
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