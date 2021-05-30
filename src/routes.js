import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import Comparativo from './pages/Comparativo';
import MinhasVendas from './pages/MinhasVendas';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/minhas-vendas" component={MinhasVendas} />
            <Route exact path="/comparativo" component={Comparativo} />
        </Switch>
    );
}

export default Routes;