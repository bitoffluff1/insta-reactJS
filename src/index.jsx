import './assets/global.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Auth } from 'components/Auth';
import { Main } from 'components/Main';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Link to='/'>Home</Link>
                <Link to='/auth'>Auth</Link>

                <Switch>
                    <Route path='/' component={Main} exact />
                    <Route path='/auth' component={Auth} exact />
                </Switch>
            </Fragment>
        );
    }
}

ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'),
);
