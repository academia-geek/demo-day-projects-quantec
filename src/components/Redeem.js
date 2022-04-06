import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import styled from "styled-components"
import { listRedeemAsyn } from '../redux/actions/redeemAction'
import { Card, CardContainer, H6, Imagen, Title } from '../styled/RedeemStyled'
import RedeemPoints from './RedeemPoints'

const Redeem = () => {

    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState([]);

    const dispatch = useDispatch()
    const { redeem } = useSelector(store => store.redeem)
    
    useEffect(() => {
        dispatch(listRedeemAsyn())
    }, [])

    const handleRedeem = (id) => {
        
        const filterRedeem = redeem.find(r => r.id === id)
        
        setModal(true)
        setEditModal(filterRedeem)
    }

    return (
        <div>

            <RedeemH2>
                Redime tus puntos
            </RedeemH2>
            <RedeemH4>
                ¡ Redime tus puntos de ahorro por descuentos o productos reales !
            </RedeemH4>
            <CardContainer>
                {
                    redeem.map((r, index) => (
                        <Card key={index}
                            className='card'
                            onClick={() => handleRedeem(r.id)}>                            
                            <Imagen src={r.img} />
                            <H6>{r.puntos}</H6>
                            <Title>{r.titulo}</Title>
                            
                        </Card>
                    ))
                }
            </CardContainer>
            {
                modal === true ? <RedeemPoints modal={editModal} modalShow={modal} setModal={setModal}/> : ''
            }
            <ToastContainer />
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

color: #757575;
padding: 32px 25px 25px 0 ;
`
const RedeemH4 = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;

/* or 200% */
letter-spacing: -0.3px;

color: #8D8A8A;
padding: 32px 25px 0 25px ;


`
export default Redeem