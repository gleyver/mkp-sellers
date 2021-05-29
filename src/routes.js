import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Publicar from './pages/Publicar';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/publicar" component={Publicar} />
        </Switch>
    );
}

export default Routes;