import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    /* padding: 30px; */
`
export const ContainerP = styled.div`
    
    background-color: white;
    height:672px;
  display: table-cell;
  vertical-align: middle;
       `
export const H5 = styled.h5`
    
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.3px;

color: #757575;
    margin:37px 25px 60px 31px;

`
export const P = styled.p`
    color:hsla(0, 0%, 37%, 1);
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
margin-left:24px;
margin-right:24px;


/* or 171% */
letter-spacing: -0.3px;
`
export const Img = styled.img`
    margin-top:0px;
    margin-bottom:26px;
`
export const CustomButton = styled.button`
width:300px;
height:44px;
background-color:#3C1280;
border:none;
border-radius:20px;
align-items: center;
margin-top:24px;
`
export const Crear = styled(Link)`
    text-decoration: none;
    color: #3C1280;
    font-weight: 700, bold;
    margin: 25% 25% 0 30%;
`
export const DivAims = styled.div`
    /* display: none; */


`
export const DivInfoAims = styled.div`
    
`