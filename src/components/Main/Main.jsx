import React, { Component } from 'react';

import { Profile } from '../Profile';
import { GalleryContainer } from '../../containers/GalleryContainer';

export class Main extends Component {

    render() {
        return (
            <div className="container">
                <Profile />
                <GalleryContainer history={this.props.history}/>
            </div>
        );
    }
}
