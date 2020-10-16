import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import Online from './pages/online';
import P1 from './pages/p1';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/Online" component={Online} />
                <Route path="/Offline" component={P1} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;