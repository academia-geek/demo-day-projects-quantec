import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DivTip = styled.div`
height:263px;

background-image:url("https://res.cloudinary.com/dn1jeryp3/image/upload/v1648739635/proyecto-final/Card_tip_1_h42wgf.svg");
background-size:100%;
color:white;
h2{
    position:relative;
    top:34px;
}
h6{
    position:relative;
    top:30px;
}

`
export const TipContainer = styled.div`
div>*{
    margin: 25px;
}`
export const CustomLink = styled(Link)`
position: relative;
top:25px;`
export const DivInfoTip = styled.div`
height:300px;
position: absolute;
top:30%;
align-items: center;
border-radius: 20px 20px;
background-color:white;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
letter-spacing: 0.3px;
color: #8D8A8A;
`