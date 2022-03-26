import React from 'react'
import { useSelector } from 'react-redux';
import { Ahorro, Aims, ContainerAims, DivInfo, Final, H3, Inicial, Meta, Progress, VerMas } from '../styled/NewAimsStyled';

const NewAims = () => {

    const {aims} = useSelector(store => store.aims)
    console.log(aims);
    const now = 20;

    return (
        <div>
            <ContainerAims>
            {
                        aims.map((a, index )=> (
                            <div key={index}>
                                <DivInfo>                    
                                    <H3>{a.aim}</H3>
                                    <Aims>Finca raíz</Aims>
                                    <VerMas to=''>Ver más</VerMas>
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
        </div>
    )
}

export default NewAims