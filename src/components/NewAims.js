import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { listAimsAsyn } from '../redux/actions/aimsAction';
import { CustomButton } from '../styled/LoggedHome';
import { Ahorro, Aims, ContainerAims, DivInfo, Final, H3, Inicial, Meta, Progress, VerMas } from '../styled/NewAimsStyled';
import "../styles/newaims.css"
import styled from "styled-components"
const NewAims = () => {

    const { aims } = useSelector(store => store.aims)
    console.log(aims);
    const dispatch = useDispatch();
    const now = 20;

    useEffect(() => {
        dispatch(listAimsAsyn())
    }, [dispatch])

    function Alert() {

        Swal.fire({

            html: '<h3 class="title">¿Qué acción quieres realizar?</h3><h4 class="left">editar</h4><hr/><h4 class="left">eliminar</h4><hr/>',
            position: 'bottom',
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp+
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            },
            grow: 'row',
            showConfirmButton: false,
            showCloseButton: false,

        })
    }

    return (
        <div>
            <center>

                {
                    aims.map((a, index) => (
                        <ContainerAims key={index}>
                            <DivInfo>
                                <H3>{a.aim}</H3>

                                <H3 onClick={Alert}>Ver más</H3>
                            </DivInfo>
                            <div className='mt-3'>
                                <Ahorro>Mi ahorro</Ahorro>
                                <Meta>Mi meta</Meta>
                                <Progress now={now} />
                                <Inicial>0</Inicial>
                                <Final>{a.quantity}</Final>
                            </div>
                        </ContainerAims>
                    ))
                }


            </center>
        </div>
    )
}
const AddAimButton = styled.button`
border:none;
background-color:rgba(255,255,255,0);
color: #3C1280 !important;
`

export default NewAims