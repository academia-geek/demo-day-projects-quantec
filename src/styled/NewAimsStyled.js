import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerAims = styled.div`
width:327px;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding-bottom: 10px;
    margin-bottom: 3%;
    
`
export const DivInfoS = styled.div`
display:flex;
justify-content:space-between;
margin:20px 9px 0px 9px;
align-items:center;
`
export const DivInfo = styled.div`
display:flex; 
align-items: flex-end;
`
export const H3 = styled.h3`
    color: #757575;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    width:70px;
    
`
export const Aims = styled.h6`
    border: 1px solid #31D3FB;
    font-size: 10px;
    margin: 7% 0 1% 4%;
    text-align: center;
    padding: 3px;
    border-radius: 3px;
    color: #757575;
    font-weight: 400;
`
export const VerMas = styled(Link)`
    text-decoration: none;
    font-weight: 400;
font-size: 12px;
line-height: 15px;

/* identical to box height */
letter-spacing: -0.3px;

color: rgba(153, 150, 150, 0.7);
`
export const Ahorro = styled.span`
    color: #757575;
    font-size: 12px;
    font-weight: 600;
    margin-left: 6%;
`
export const Meta = styled.span`
    color: #757575;
    font-size: 12px;
    font-weight: 600;
    margin-left: 52%;
`
export const MiAhorro = styled.span`
ont-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;

/* identical to box height */
letter-spacing: -0.3px;

color: #757575;


`
export const Progress = styled(ProgressBar)`
   
border-radius: 20px;
    
    width: 92%;
    height: 10px;
    margin: 1% 2% 2% 3%;
`
export const Inicial = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #757575;
    
    
`
export const Final = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: #757575;
    
    
    
`
export const Values = styled.div`
display:flex;
justify-content:space-between;
margin:0px 5% 0% 5%
`