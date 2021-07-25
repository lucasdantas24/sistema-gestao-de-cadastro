import React, { useState, useEffect } from 'react';
import NavBar from '../../components/barra-navegacao';
import Footer from '../../components/cabecalho';
import Utils from '../../components/cadastro-funcoes';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

export default function ProductView() {
    const [ data, setData ] = useState([]);
    
    useEffect(() =>{
        let s = new Utils();
        setData(s.listAllProducts);
        if (typeof s.listAllProducts === "undefined") {
            setData([]);
        }
      }, [])
    return (
       <>
        <NavBar />
            <div className="section-principal">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    { 
                        data.map( (prod ) =>
                            <tbody>
                                <tr>
                                    <td><img src={localStorage.getItem(prod.foto)} alt="Não carregado" width="200" height="auto" /></td>
                                    <td>{prod.nome}</td>
                                    <td>{prod.descricao}</td>
                                    <td>{prod.preco}</td>
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
