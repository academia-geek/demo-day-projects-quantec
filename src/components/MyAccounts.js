import React from 'react'
import { Crear } from '../styled/LoggedHome'
import { DivAccount, DivInfo, H6, He6, Logo, Saldo } from '../styled/MyAccountStyled'

const MyAccounts = () => {
  return (
    <div>
      <DivAccount>
        <Logo src='https://res.cloudinary.com/ddxauuwcf/image/upload/v1645060796/images/insure_jgmccc.svg' />
        <DivInfo>
          <H6>Cuenta de nómina</H6>
          <He6>Saldo actual</He6>
        </DivInfo>
        <Saldo>$10100.000</Saldo>
      </DivAccount>
      <Crear to=''><b>Crear cuenta</b></Crear>
    </div>
  )
}

export default MyAccounts