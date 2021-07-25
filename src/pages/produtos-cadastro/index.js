import React, { useState } from 'react';
import NavBar from '../../components/barra-navegacao';
import Utils from '../../components/cadastro-funcoes';
import { Form, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import { default as UUID } from "uuid";
import Footer from '../../components/cabecalho';

export default function ProductRegister() { 
    const history = useHistory()
    const [ nome, setNome ] = useState();
    const [ preco, setPreco ] = useState();
    const [ descricao, setDescricao ] = useState();
    let [ foto ] = useState();

    const setFoto = (e) => {
      foto = e.target.files[0];
    }

    const getBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        reader.readAsDataURL(file);
      });
    };

    const handledSubmit = (e) => {
      e.preventDefault();
      const img_id = UUID.v4();
      getBase64(foto).then(base64 => {
        localStorage[img_id] = base64;
      });
      const product = {
        nome: nome,
        preco: preco,
        descricao: descricao,
        foto: img_id
      }
      let s = new Utils();
      s.createProduct(product);
  
      history.push('/produtos');
    }

    
    return (
        <>   
            <NavBar />
            <div className="section-principal background-container">
                <Container>
                    <h1>Cadastro de Produtos</h1>
                    <p>Preencha as informações e as submeta para cadastrar os dados de um produto.</p>
                    <Form onSubmit={handledSubmit}>
                      <Row className="mb-3">
                        <Form.Group
                          as={Col}
                          md="8"
                          className="position-relative">
                          <Form.Label>Nome do Produto</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={ nome }
                            onChange={(e) => setNome(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          as={Col}
                          md="4"
                          className="position-relative"
                        >
                          <Form.Label>Preço do Produto</Form.Label>
                          <Form.Control
                            type="text"
                            name="price"
                            value={ preco }
                            onChange={(e) => setPreco(e.target.value)}
                            required
                          />

                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col}>
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control
                            type="text"
                            as="textarea"
                            rows={3}
                            value={ descricao }
                            onChange={(e) => setDescricao(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Row>
                      <Form.Group controlId="formFileLg" className="mb-3">
                          <Form.Label>Foto do Produto</Form.Label>
                          <Form.Control 
                            type="file" 
                            size="lg"
                            value={ foto }
                            onChange={setFoto}
                            required 
                            />
                      </Form.Group>
          
                      <Button type="submit">Cadastrar</Button>
                    </Form>
                </Container>
            </div>
            <Footer />
        </>
    )
}
