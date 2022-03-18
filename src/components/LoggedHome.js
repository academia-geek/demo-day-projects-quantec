import React from 'react'
import { Container, ContainerP, H5, Img, P } from '../styled/LoggedHome'
import SaldoCuentas from './SaldoCuentas'

const LoggedHome = () => {
    return (
        <Container>
            <SaldoCuentas/>
            <ContainerP>
                <H5>Descubre el potencial de sus finanzas </H5>
                <div>
                    <Img src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1647560244/images/Prueba-Tecnica/undraw_designer_re_5v95_1_g93dek.svg'/>
                    <P>Encuentra proximamente herramientas y contenido ara que construyas el estilo de vida que sueñas y e mereces.<br></br> Lo que pase aquí y ahora definirá tu futuro.</P>
                </div>

            </ContainerP>
        </Container>
    )
}

export default LoggedHome