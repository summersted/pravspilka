import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import classes from '../style-modules/main.module.css'

let Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Правнича спілка</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/consult">Консультація</Nav.Link>
                    <Nav.Link href="/pricing">Ціни</Nav.Link>
                    <Nav.Link href="/partners">Партнери</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/contacts">Контакти</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;