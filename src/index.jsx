import './assets/global.scss';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {Profile} from "./components/Profile";
import {Gallery} from "./components/Gallery";

class App extends Component {
    render() {
        return (
            <div>
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
            </div>

        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));