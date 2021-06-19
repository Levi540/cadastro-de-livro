
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloMessage from './paginas/Teste/HelloMessage';
import ListarLivros2 from './paginas/Teste/Livro2';
import CadastroLivro from './paginas/Teste/CadastroLivro';
import CadastroUsuario from './paginas/Teste/CadastroUsuario';
import Login from './paginas/Teste/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={HelloMessage} />
                <Route path='/livros' exact={true} component={ListarLivros2} />
                <Route path='/cadastrolivro' exact={true} component={CadastroLivro} />
                <Route path='/cadastrousuario' exact={true} component={CadastroUsuario} />
                <Route path='/login' exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;