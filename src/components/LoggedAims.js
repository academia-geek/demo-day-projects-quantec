import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, ContainerP, CustomButton, DivAims, DivInfoAims, H5 } from '../styled/LoggedHome'
import NewAims from './NewAims'


const LoggedAims = () => {

    const [show, setShow] = useState(false);
    console.log(show);
    useEffect(() => {
      
    }, [])
    

    return (
        <Container>

            <ContainerP>
                <H5>Mis objetivos </H5>
                <center>
                    <DivInfoAims>
                        <h2>Aun no tienes ningun objetivo</h2>
                        <img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648132063/proyecto-final/Pig_2_ywta35.svg" alt="" />
                    </DivInfoAims>
                    <DivAims>
                        <NewAims />
                    </DivAims>

                    <Link to={"/addnewaim"}><CustomButton className='text-light mt-5'><b>Agregar un objetivo</b></CustomButton>
                    </Link>
                </center>
            </ContainerP>
        </Container>

    )
}

export default LoggedAims