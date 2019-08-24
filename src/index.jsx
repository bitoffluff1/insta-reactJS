import './assets/global.scss';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import {Profile} from "./components/Profile";
import {Gallery} from "./components/Gallery";
import {Counter} from "./components/Counter";
import {Timer} from "./components/Timer";
import {Auth} from "./components/Auth";

class App extends Component {
    state = {visible: true};

    handleToggleClick = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    };

    render() {
        const {visible} = this.state;

        return (
            <Fragment>
                <button onClick={this.handleToggleClick}>Toggle</button>
                {visible && <Timer/>}

                <Counter/>

                <Auth/>

                <header>
                    <div className="container">
                        <Profile/>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <Gallery/>
                    </div>
                </main>
            </Fragment>

        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));