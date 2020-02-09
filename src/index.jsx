import './assets/global.scss';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Auth } from 'components/Auth';
import { Main } from 'components/Main';

class App extends Component {
    state = {
        token: localStorage.getItem('token'),
    };

    handleSignOut = (event) => {
        this.setState({ token: '' }, () => {
            localStorage.setItem('token', null);
        });
        event.preventDefault();
    };

    render() {
        const {token} = this.state;

        return (
            <Fragment>
                {token && <button onClick={this.handleSignOut}>Sign Out</button>}
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
