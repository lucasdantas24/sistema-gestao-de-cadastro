import React from 'react'
import NavBar from '../../components/barra-navegacao';
import Footer from '../../components/cabecalho';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            <NavBar />
            <div class="section-principal background-container">
                <Container>
                    <h1>SISTEMA GESTÃO DE CADASTROS</h1>
                    <p>Esse é um sistema criado para fazer a gestão do inventário de uma loja, clique em clientes ou produtos para visualizar os dados já cadastrados.</p>
                <Row><Button href='/clientes' style={{ marginTop: "50px" }}>Clientes</Button></Row>
                    <Row><Button href='/produtos'style={{ marginTop: "50px" }}>Produtos</Button></Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
