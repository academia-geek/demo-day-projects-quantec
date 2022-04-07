import React from 'react'
import QRCode from 'react-qr-code'
import { CodigoPoints, DivCodigo, H3Codigo, P } from '../styled/RedeemPointsStyled'

const Codigo = () => {
  return (
    <div>
        <DivCodigo>
            <H3Codigo>Código para reclamar tu premio</H3Codigo>
            <CodigoPoints><b>XP34N782D</b></CodigoPoints>
            <div style={{ background: 'white', padding: '36px' }}>
                <QRCode value="hey" />
            </div>
            <P>Con este código puedes hacer uso de tu premio. Preséntalo en el establecimeinto.</P>                             
        </DivCodigo>
    </div>
  )
}

export default Codigo