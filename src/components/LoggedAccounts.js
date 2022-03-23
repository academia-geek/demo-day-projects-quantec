import React from 'react'
import { Container, ContainerP, CustomButton, DivAccount, H5 } from '../styled/LoggedHome'
import MyAccounts from './MyAccounts'

import SaldoCuentas from './SaldoCuentas'

const LoggedAccounts = () => {
    return (
        <Container>
<<<<<<< HEAD
            <SaldoCuentas />
            <ContainerP>
                <H5>Mis objetivos </H5>
                <center>
                    <h2>Aun no tienes ningun objetivo</h2>
                    <DivAccount>
                        <MyAccounts />
                    </DivAccount>

                    <CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
                </center>
=======
            <SaldoCuentas/>
            <ContainerP>
                <H5>Mis objetivos </H5>
                <div>
                    <h2>Aun no tienes ningun objetivo</h2> 
                    <DivAccount>
                        <MyAccounts/>  
                    </DivAccount>                
                </div>
                <CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
>>>>>>> ba57a0b1547f3986e1601f0c8624ed3577530489
            </ContainerP>
        </Container>
    )
}

export default LoggedAccounts