import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import styled from "styled-components"
const OpenedTips = () => {
    const location = useLocation();
    const { id } = location.state

    const { tips } = useSelector(store => store.tips)

    const [tipSel, setTipSel] = useState({
        descripcion: '',
        tip_completo: '',
        titulo: '',
        id: ''
    })
    useEffect(() => {
        filterTip()
    }, [])
    const filterTip = () => {
        const findTip = tips.find(t => t.id == id)
        setTipSel(findTip)
    }



    return (
        <TipContainer>
            <TitleContainer>
                <BackArrow to='/loggedacc'><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648744821/proyecto-final/ep_arrow-left_mxzmra.svg" alt="" /></BackArrow>
                <TitleTip className='mt-4'>{tipSel.titulo}</TitleTip>
                <TipDesc className='mt-3'>{tipSel.descripcion}</TipDesc>
            </TitleContainer>
            <TipInfoContainer className='mt-5'>
                <p>{tipSel.tip_completo}</p>
                <cite> <a style={{ color: "#3C1280" }} href='https://www.pichincha.com/portal/blog/post/tips-para-ahorrar-dinero'>Fuente:Banco pichincha</a>
                </cite>
            </TipInfoContainer>
        </TipContainer>
    )
}

const TitleContainer = styled.div`
*{
    color:white;
}
z-index:0;
height:263px;

background-image:url("https://res.cloudinary.com/dn1jeryp3/image/upload/v1648739635/proyecto-final/Card_tip_1_h42wgf.svg");
background-size:375px;
`
const BackArrow = styled(Link)`
position: relative;
top:24px;
`

const TitleTip = styled.h2`


font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: -0.3px;
position: relative;
top:30px
`

const TipDesc = styled.h6`
position: relative;
top:20px;`

const TipInfoContainer = styled.div`
border-radius: 20px 20px 0px 0px !important;
background-color: white;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.3px;
color: #8D8A8A;
position: relative;
top:-75px;
z-index:1;

div>*{
    margin:0;
}`

const TipContainer = styled.div`
div>*{
    margin:25px;
}
p{
    margin-top:0;
    padding-top:25px;
}


`
export default OpenedTips