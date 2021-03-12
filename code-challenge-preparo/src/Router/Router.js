import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cadastro from '../pages/Cadastro';
import DadosBasicos from '../pages/DadosBasicos';
import Inicio from '../pages/Inicio';
import Localizacao from '../pages/Localizacao';
import Login from '../pages/Login';

function Router() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" >
                <Login/>
            </Route>

            <Route exact path="/login" >
                <Login/>
            </Route>

            <Route exact path="/signup" >
                <Cadastro />
            </Route>

            <Route exact path="/perfil" >
                <Inicio />
            </Route>

            <Route exact path="/formsperfil" >
                <DadosBasicos />
            </Route>

            <Route exact path="/formslocalizacao" >
                <Localizacao />
            </Route>

            <Route path="/" >
                <h3>Eita Giovana, o forninho caiu (404)</h3>
            </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default Router;