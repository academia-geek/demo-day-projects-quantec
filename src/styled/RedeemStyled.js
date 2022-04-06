import styled from 'styled-components'

export const CardContainer = styled.div`
 display: grid; 
  grid-template-columns: 25% 25% 25%; 
  grid-template-rows: 33% 33% 33%; 
  gap: 6% 5%; 
  grid-template-areas: 
    ". . ."
    ". . ."
    ". . ."; 
    justify-content: center; 
  justify-items: center; 
  align-items: center; 
`

export const Card = styled.div`
    display: flex;
justify-content: center;
align-items: center;
padding: 8px 4px;

position: static;
width: 80px;
height: 93px;
left: 0px;
top: 0px;

background: #FFFFFF;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
border-radius: 8px;


margin: 5px 32px;
`
export const Imagen = styled.img`
    width: 65%;
    margin-left: 5px;
    margin-top: 10px;
`
export const Title = styled.h4`
    position: static;
width: 72px;
height: 23px;
left: 4px;
top: 62px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 10px;
text-align: center;
letter-spacing: -0.3px;

color: #8D8A8A;

`
export const H6 = styled.h6`
position: static;
width: 36px;
height: 10px;
left: 22px;
top: 48px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 8px;
line-height: 10px;
/* identical to box height */

text-align: center;
letter-spacing: -0.3px;

color: #B4B4B4;
`