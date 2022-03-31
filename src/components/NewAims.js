import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAimsAsyn, filterAimsAsyn, listAimsAsyn } from '../redux/actions/aimsAction';
import { CustomButton } from '../styled/LoggedHome';
import { Ahorro, Aims, ContainerAims, DivInfo, DivInfoS, Final, H3, Inicial, Meta, MiAhorro, Progress, Values, VerMas } from '../styled/NewAimsStyled';
import "../styles/newAim.css"
import DeleteForever from '@mui/icons-material/DeleteForever';
const NewAims = () => {

    const { aims } = useSelector(store => store.aims)

    
    const now = 20;

    
  





    return (
        <div>
            <center>


                {
                    aims.map((a, index) => (
                        <ContainerAims key={index}>
                            <DivInfoS>

                                <DivInfo>
                                    <H3>
                                        {a.aim}
                                    </H3>
                                    <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648680087/proyecto-final/clarity_edit-line_x2nsaf.svg" alt="" />


                                </DivInfo>


                                <VerMas to='/vermas'
                                    state={{ id: a.idDocument }}>
                                    <DivInfo>




                                        <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648680089/proyecto-final/clarity_trash-line_ihgzqm.svg" alt="" />
                                        Eliminar

                                    </DivInfo>
                                </VerMas>
                            </DivInfoS>

                            <div className='mt-3'>
                                <Values>
                                    <MiAhorro>Mi ahorro</MiAhorro>
                                    <Meta>Mi meta</Meta>
                                </Values>
                                <Progress now={now} />
                                <Values>
                                    <Inicial>$0</Inicial>
                                    <Final>${a.quantity}</Final>
                                </Values>

                            </div>
                        </ContainerAims>
                    ))
                }



            </center>

        </div>
    )
}

export default NewAims