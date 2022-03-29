import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components"
import { listTipsAsyn } from '../redux/actions/tipsAction';
// import { tips } from '../data/tips';
import { store } from '../redux/store/store';
const LoggedAccounts = () => {
    const {tips} = useSelector(store => store.tips)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(listTipsAsyn())
    }, [])
    
    return (

        <Tips>
            <header>
                <CardTitle>
                    Tips
                </CardTitle>
                <CardDesc>
                    Alcanza todo tu potencial para ahorrar con ayuda de nuestros tips que estaremos publicando semanalmente.
                </CardDesc>
            </header>


            {
                tips.map((t, index) => (
                    <Cards key={index}>
                        <CardContainer>
                            <CardsImg
                                src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648310142/proyecto-final/Group_2158_tx8hgm.svg"
                                alt="" />
                            <CardText>{t.titulo}</CardText>
                        </CardContainer>
                        <hr />
                    </Cards>

                ))
            }



        </Tips>

    )
}
const Tips = styled.div`
margin-left:24px;
margin-right:24px;
margin-bottom:16px;
padding-top:32px;
align-content:center;
`

const Cards = styled.div`

`
const CardTitle = styled.h3`
margin:0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;

/* identical to box height */
letter-spacing: -0.3px;

color: #757575;

`
const CardDesc = styled.h4`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;

/* or 200% */
letter-spacing: -0.3px;

color: #8D8A8A;

`
const CardsImg = styled.img`
width:96px;
height:67px;
border-radius:10px;
margin-right:13px;
`
const CardText = styled.h3`
margin:0;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;

/* or 114% */

color: #757575;

`
const CardContainer = styled.div`
display: flex;
align-items: center;
`

export default LoggedAccounts