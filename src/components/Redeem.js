import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { listRedeemAsyn } from '../redux/actions/redeemAction'
import { store } from '../redux/store/store'
import { CustomLink } from '../styled/OpenedTipsStyled'
import { Card, H6, Imagen, Title } from '../styled/RedeemStyled'
const Redeem = () => {
    const dispatch = useDispatch()
    const {redeem} = useSelector(store => store.redeem)
    console.log(redeem);
    useEffect(() => {
      dispatch(listRedeemAsyn())
    }, [])
    
    return (
        <div>
            <Link to='loggedprofile'>Atrás</Link>
            <RedeemH2>
                Redime tus puntos
            </RedeemH2>
            <RedeemH4>
                ¡ Redime tus puntos de ahorro por descuentos o productos reales !
            </RedeemH4>
            <div>
                {
                    redeem.map((r, index) => (
                        <Card key={index}
                        className='card'>
                            <Imagen src={r.img}/>
                            <H6>{r.puntos}</H6>
                            <Title>{r.titulo}</Title>
                        </Card>
                    ))
                }
            </div>
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