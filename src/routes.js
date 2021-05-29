import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={DashBoard} />
        </Switch>
    );
}

export default Routes;