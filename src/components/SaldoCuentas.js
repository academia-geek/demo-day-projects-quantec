import React from 'react'
import { Container, H3, P } from '../styled/SaldoCuentasStyled'

const SaldoCuentas = () => {
  return (
    <Container className='menu'>
        <div>
            <H3>$1.000.000</H3>
            <P>Saldo en cuentas</P>
        </div>
    </Container>
  )
}

export default SaldoCuentas