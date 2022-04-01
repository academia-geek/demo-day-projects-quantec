import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { DivInfoTip, DivTip } from '../styled/OpenedTipsStyled';

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
        <div>
            <DivTip>
                <Link to='/loggedacc'>atras</Link>
                <h2 className='mt-4'>{tipSel.titulo}</h2>
                <h6 className='mt-3'>{tipSel.descripcion}</h6>
            </DivTip>
            <DivInfoTip className='mt-5'>
                <p>{tipSel.tip_completo}</p>
            </DivInfoTip>
        </div>
    )
}

export default OpenedTips