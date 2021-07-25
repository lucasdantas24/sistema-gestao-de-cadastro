import React, { useState } from 'react';
import NavBar from '../../components/barra-navegacao';
import Footer from '../../components/cabecalho';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './index.css';
import Utils from '../../components/cadastro-funcoes';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientRegister() { 
    const history = useHistory();
    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ cidade, setCidade ] = useState('');
    const [ estado, setEstado ] = useState('');
    const [ cep, setCep ] = useState('');

    const handledSubmit = (e) => {
        e.preventDefault();
        const client = {
          nome: nome,
          email: email,
          telefone: telefone,
          cidade: cidade,
          estado: estado,
          cep: cep
        }
        let s = new Utils();
        s.createClient(client);
    
        history.push('/clientes');
    }

    return (
        <>   
            <NavBar />
            <div className="section-principal background-container">
                <Container>
                    <h1>Cadastro de Clientes</h1>
                    <p>Preencha as informações e as submeta para cadastrar os dados de um cliente.</p>
                    <Form onSubmit={handledSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nome"
                                    value={ nome }
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    value={ email }
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Telefone"
                                    value={ telefone }
                                    onChange={(e) => setTelefone(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Cidade" 
                                    value={ cidade }
                                    onChange={(e) => setCidade(e.target.value)} 
                                    required />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Estado" 
                                    value={ estado }
                                    onChange={(e) => setEstado(e.target.value)}
                                    required />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom05">
                                <Form.Label>CEP</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="CEP" 
                                    value={ cep }
                                    onChange={(e) => setCep(e.target.value)}
                                    required />
                            </Form.Group>
                        </Row>
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    )
}
