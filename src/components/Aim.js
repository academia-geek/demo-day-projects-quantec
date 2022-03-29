import React from 'react'
import "../styles/blackCards.css"
import styled from "styled-components"
import { Link } from 'react-router-dom'
const Aim = () => {
    return (<div>

    </div>
    )
}
export const AimContainer = styled.div`
margin-top:40px
`
export const AimType = styled.div`
background: rgba(255, 255, 255, 0.4);
border-radius: 10px;
height:70px;
width:327px;
display:flex;
flex: none;
order: 0;
flex-grow: 0;
margin: 32px 0px;
align-items: center;
`
export const CustomLink = styled(Link)`
text-decoration:none;
color: inherit;
`

export default Aim