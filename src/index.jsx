import './assets/global.scss';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import {Profile} from "./components/Profile";
import {Gallery} from "./components/Gallery";
import {Auth} from "./components/Auth";

import {Counter} from "./components/Counter";
import {Timer} from "./components/Timer";

class App extends Component {
    state = {
        visible: false,
        token: null,
    };

    handleToggleClick = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    };

    handleSuccess = (token) => {
        this.setState({token});
    };

    render() {
        const {visible, token} = this.state;

        return (
            <Fragment>
                {!token && <Auth onSuccess={this.handleSuccess}/>}

                <button onClick={this.handleToggleClick}>Toggle</button>
                {visible && <Timer/>}
                <Counter/>

                {token && <Fragment>
                    <header>
                        <div className="container">
                            <Profile/>
                        </div>
                    </header>
                    <main>
                        <div className="container">
                            <Gallery token={token}/>
                        </div>
                    </main>
                </Fragment>}
            </Fragment>

        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));