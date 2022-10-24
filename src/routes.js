import React from 'react';
import { Redirect, Switch, Route, Router} from "react-router-dom"
import { history } from './Helpers/history';

export default function Routes(){
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomePage}
                />
                <Route
                    path="/login"
                    component={LoginPage}
                />
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}