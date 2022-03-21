import React from 'react'
import { Ahorro, Aims, ContainerAims, DivInfo, Final, H3, Inicial, Meta, Progress, VerMas } from '../styled/NewAimsStyled';

const NewAims = () => {
    const now = 20;

    return (
        <div>
            <ContainerAims>
                <DivInfo>
                    <H3>Mi casa</H3>
                    <Aims>Finca raíz</Aims>
                    <VerMas to=''>Ver más</VerMas>
                </DivInfo>
                <div className='mt-3'>
                    <Ahorro>Mi ahorro</Ahorro>
                    <Meta>Mi meta</Meta>
                    <Progress variant='info' now={now} label={`${now}%`} />
                    <Inicial>$10.000</Inicial>
                    <Final>$200.000.000</Final>
                </div>
            </ContainerAims>
        </div>
    )
}

export default NewAims