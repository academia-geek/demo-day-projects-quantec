import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { CustomLink, DivInfoTip, DivTip, TipContainer } from '../styled/OpenedTipsStyled';

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
            <DivTip>
                <CustomLink to='/loggedacc'><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648744821/proyecto-final/ep_arrow-left_mxzmra.svg" alt="" /></CustomLink>
                <h2 className='mt-4'>{tipSel.titulo}</h2>
                <h6 className='mt-3'>{tipSel.descripcion}</h6>
            </DivTip>
            <DivInfoTip className='mt-5'>
                <p>{tipSel.tip_completo}</p>
                <cite>
                    <a href="https://www.pichincha.com/portal/blog/post/tips-para-ahorrar-dinero">Banco Pichincha</a>
                </cite>
            </DivInfoTip>
        </TipContainer>
    )
}

export default OpenedTips