import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAimsAsyn, listAimsAsyn } from '../redux/actions/aimsAction';
import { CustomButton } from '../styled/LoggedHome';
import { Ahorro, Aims, ContainerAims, DivInfo, Final, H3, Inicial, Meta, Progress, VerMas } from '../styled/NewAimsStyled';

const NewAims = () => {

    const {aims} = useSelector(store => store.aims)
    console.log(aims);
    const dispatch = useDispatch();
    const now = 20;

    useEffect(() => {
      dispatch(listAimsAsyn())
    }, [dispatch])
    
    return (
        <div>
            <ContainerAims>
            {
                aims.map((a, index )=> (
                    <div key={index}>
                        <DivInfo>                    
                            <H3>{a.aim}</H3>
                            <Aims>Finca raíz</Aims>
                            <VerMas to='/vermas' >Ver más</VerMas>
                        </DivInfo>
                        <div className='mt-3'>
                            <Ahorro>Mi ahorro</Ahorro>
                            <Meta>Mi meta</Meta>
                            <Progress variant='info' now={now} label={`${now}%`} />
                            <Inicial>0</Inicial>
                            <Final>{a.quantity}</Final>
                        </div>                        
                    </div>
                        ))
                    }               
            </ContainerAims>
            {/* <Link to={"/plusaimtype"}><CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
                    </Link> */}
        </div>
    )
}

export default NewAims