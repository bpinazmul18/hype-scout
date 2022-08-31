import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'

import NavbarDropdown from './common/NavbarDropdown'
import NavItem from './common/NavItem';

import logo from '../assets/img/hype-scout.png'


const NavBar: React.FC = () => {
    const handleClick = (name: string) => {
        const body = document.getElementsByTagName("BODY")[0]
        body.className = name
    }

    return (
        <Navbar className="mb-5" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand to="/" as={Link}>
                    <img className="img-fluid" src={logo} alt="HypeScout"/>
                </Navbar.Brand>

                <NavbarDropdown onClick={handleClick}/>

                <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

                <Navbar.Offcanvas className="navbar-offset p-lg-0" id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
                    <Nav className="mx-lg-auto" as="ul">
                            <NavItem to="/dashboard" linkName="Dashboard"/>
                            <NavItem to="/campaign" linkName="Campaign"/>
                            <NavItem to="/hypesocial" linkName="Hypesocial"/>
                            <NavItem to="/insights" linkName="Insights"/>
                    </Nav>

                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default NavBar
