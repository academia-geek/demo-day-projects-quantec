import React from 'react'
import styled from "styled-components"
const Redeem = () => {
    return (
        <div>
            <RedeemH2>
                Redime tus puntos
            </RedeemH2>
            <RedeemH4>
                ¡ Redime tus puntos de ahorro por descuentos o productos reales !
            </RedeemH4>
            <p>cambiar esta p por map de cards sin diseñar</p>
        </div>
    )
}

const RedeemH2 = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;

/* identical to box height */
letter-spacing: -0.3px;

color: #757575;`
const RedeemH4 = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;

/* or 200% */
letter-spacing: -0.3px;

color: #8D8A8A;

`
export default Redeem