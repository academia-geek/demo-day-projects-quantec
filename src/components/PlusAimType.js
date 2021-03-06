import React from 'react'
import { AimContainer, AimType, CustomLink } from './Aim'
import { BlackCards, H2, H3 } from './Welcome'
import styled from "styled-components"
import { H4 } from './AddNewAcc'
import { getAuth } from 'firebase/auth'
const PlusAimType = () => {
    const auth = getAuth()
    const user = auth.currentUser;
    
    return (
        <BlackCards>
            <CustomLink to={"/loggedaims"}>
                <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647530651/proyecto-final/ep_arrow-left_zxewky.svg" alt="" className="back" />
            </CustomLink>
            <AimContainer>
                <H2>¡Hola, </H2> <H2>{user.displayName}</H2>
                <H3>¿Cuál de los siguientes objetivos quieres alcanzar?</H3>
                <H4>Para comenzar selecciona una opción:</H4>
            </AimContainer>
            <center>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Mi casa'}}>                    
                    <AimType className="AimType">
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955866/proyecto-final/home_af9yjy.svg" alt="" height={38} width={60} />
                        <H3>Mi casa</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Mis estudios'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955865/proyecto-final/grade_qs9k9s.svg" alt="" height={49.45} width={60} />
                        <H3>Mis estudios</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Mi auto'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648050466/proyecto-final/car_kiiud0.svg" alt="" height={49.77} width={60} />
                        <H3>Mi auto</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Mi emprendimiento'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647529371/proyecto-final/ScreenChart_cfj0j4.svg" alt="" height={49.77} width={60} />
                        <H3>Mi emprendimiento</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'El viaje de mis sueños'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648048236/proyecto-final/plane_qb4sro.svg" alt="" height={49.77} width={60} />
                        <H3>El viaje de mis sueños</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Hacer un regalo'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648050010/proyecto-final/Gift_a8d99v.svg" alt="" height={49.45} width={60} />
                        <H3>Hacer un regalo</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Objetos tecnológicos'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1648049510/proyecto-final/Security_yoyvq7.svg" alt="" height={49.77} width={60} />
                        <H3>Objetos tecnológico</H3>
                    </AimType>
                </CustomLink>
                <CustomLink to={"/yourcustomaim"} state={{aimss: 'Quiero ahorrar'}}>
                    <AimType>
                        <ImgPlusAimType src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647955865/proyecto-final/Pig_mjwp2s.svg" alt="" height={49.77} width={60} />
                        <H3>Quiero ahorrar</H3>
                    </AimType>
                </CustomLink>


            </center>
        </BlackCards>
    )
}
export const ImgPlusAimType = styled.img`
margin-left:8%;`

export default PlusAimType