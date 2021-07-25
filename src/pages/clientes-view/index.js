import React, { useState, useEffect } from 'react';
import NavBar from '../../components/barra-navegacao';
import Footer from '../../components/cabecalho';
import Utils from '../../components/cadastro-funcoes';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Button from 'react-bootstrap/Button';


export default function ClientView() {
    const [ data, setData ] = useState([]);
    
    useEffect(() =>{
        let s = new Utils();
        setData(s.listAllClients);
        if (typeof s.listAllClients === "undefined") {
            setData([]);
        }
      }, [])
    
    return (
    <>   
        <NavBar />
        <div className="section-principal">
            <h1>Dados de Clientes Cadastrados</h1>
            <p>Nessa página você pode visualizar os dados de clientes já cadastrados.</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                { 
                    data.map( (cliente ) =>
                        <tbody>
                            <tr>
                                <td>{cliente.nome}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.telefone}</td>
                                <td>{cliente.cidade}</td>
                            </tr>
                        </tbody>        
                        )
                }
            </Table>
            <Button href="/clientes/register"  style={{ marginTop: 300 }}>Adicionar Registro</Button>
        </div>
        <Footer />
    </>
    )
}
