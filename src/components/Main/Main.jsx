import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { Profile } from '../Profile';
import GalleryContainer from '../../containers/GalleryContainer';
import PostContainer from '../../containers/PostContainer';

export class Main extends Component {

    render() {
        return (
            <div className="container">
                <Link to='/auth'>Sign Out</Link>

                <Profile />
                <GalleryContainer/>

                <Route path='/posts/:id' component={PostContainer} />
            </div>
        );
    }
}
