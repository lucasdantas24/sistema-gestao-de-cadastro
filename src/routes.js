import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/home';
import ClientView from './pages/clientes-view';
import ClientRegister from './pages/clientes-cadastro';
import ProductView from './pages/produtos-view';
import ProductRegister from './pages/produtos-cadastro';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/clientes' exact component={ClientView} />
                <Route path='/clientes/register' exact component={ClientRegister} />
                <Route path='/produtos' exact component={ProductView} />
                <Route path='/produtos/register' exact component={ProductRegister} />
            </Switch>
        </BrowserRouter>
    )
}