import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import styled from 'styled-components';
const NavBar = () => {

    return (
        <StyledNavBar expand={false}>
            <Container fluid>
                <Navbar.Brand href="#"><img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647471020/proyecto-final/imagen_5_ki6adg.svg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />

                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    style={{ backgroundColor: "#0E051F" }}>
                    <Offcanvas.Header closeButton className="btn-close-white">
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                        </Offcanvas.Title>

                    </Offcanvas.Header>
                    <ModalImg
                        src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1647480408/proyecto-final/imagen_6_cfvb1h.svg" alt="" />

                    <Offcanvas.Body>
                        <center><Nav className="justify-content-end flex-grow-1 pe-3">

                            <Nav.Link href="login"><H2>INICIAR SESION</H2></Nav.Link>
                            <Nav.Link href="/welcome"><H2>REGISTRATE</H2></Nav.Link>
                        </Nav></center>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </StyledNavBar>
    )
}

export default NavBar

const StyledNavBar = styled(Navbar)`


.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(51,176,228, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-toggler {
  border-color: rgb(51,176,228);
} 


`
const ModalImg = styled.img`
position: relative;
height: 45px;
right: 106px;
bottom: 43px;
`
const H2 = styled.h2`
color:white;
font-size:26px;
line-height: 29.26px;
letter-spacing:-0.3px;
font-weight: 900;
&:hover{
    color:#33B0E4;
}
`




