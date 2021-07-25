import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Gestão de Cadastros</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/clientes/register">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos/register">Produtos</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Visualização" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
