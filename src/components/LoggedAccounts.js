import React from 'react'
import { Container, ContainerP, CustomButton, DivAccount, H5 } from '../styled/LoggedHome'
import MyAccounts from './MyAccounts'


const LoggedAccounts = () => {
    return (
        <Container>
            <ContainerP>
                <H5>Mis cuentas </H5>
                <center>
                    <h2>Aun no tienes ninguna cuenta</h2>
                    <DivAccount>
                        <MyAccounts />
                    </DivAccount>

                    <CustomButton className='text-light mt-5'><b>Agregar una cuenta</b></CustomButton>
                </center>
            </ContainerP>
        </Container>
    )
}

export default LoggedAccounts