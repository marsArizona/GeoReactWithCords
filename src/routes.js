import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./component/home";
import CompUno from "./component/compuno";






const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>\
                <Route exact path="/compuno" component={CompUno}/>
            </Switch>
        </div>
    );
};

export default Routes;