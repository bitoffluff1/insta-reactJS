import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Profile } from '../Profile';
import { GalleryContainer } from '../../containers/GalleryContainer';

export class Main extends Component {

    render() {
        return (
            <div className="container">
                <Link to='/auth'>Sign Out</Link>
                <Profile />
                <GalleryContainer history={this.props.history}/>
            </div>
        );
    }
}
