import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    /* padding: 30px; */
    background: rgba(26, 33, 131, 100);
`
export const ContainerP = styled.div`
    padding: 30px;
    border: 1px solid #F6F5F7;
    border-radius: 30px 30px 0 0;
    background-color: #F6F5F7;
    padding-bottom: 60%;    
`
export const H5 = styled.h5`
    color: #757575;
    font-weight: bold;
`
export const P = styled.p`
    color: #757575;
    font-size: 15px;
`
export const Img = styled.img`
    margin: 10% 25% 10% 20%;
`
export const CustomButton  = styled.button`
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
    display: none;
`
export const DivAccount = styled.div`
    display: none;
`