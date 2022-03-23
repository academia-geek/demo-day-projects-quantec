import React from 'react'
import { Container, H3, P } from '../styled/SaldoCuentasStyled'
import LabelBottomNavigation from './LabelBottomNavigation'
export const SaldoCuentas = () => {

  return (
    <Container className='menu'>

      <H3>$1.000.000</H3>
      <P>Saldo en cuentas</P>
      <LabelBottomNavigation />
    </Container>
  )
}

export default SaldoCuentas