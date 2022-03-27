import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivAims, DivInfoAims, H5 } from '../styled/LoggedHome'
import InfoAimsNone from './InfoAimsNone'
import NewAims from './NewAims'


const LoggedAims = () => {

    const [show, setShow] = useState(true);
    console.log(show);
    useEffect(() => {
      
    }, [])
    

    return (
        <Container>

            <ContainerP>
                <H5>Mis objetivos </H5>
                <center>
                    <DivInfoAims>
                        {
                            show ? <NewAims/> : <InfoAimsNone/>
                        }                        
                    </DivInfoAims>                   

                    <Link to={"/addnewaim"}><CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
                    </Link>
                </center>
            </ContainerP>
        </Container>

    )
}

export default LoggedAims