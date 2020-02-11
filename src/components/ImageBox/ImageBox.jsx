import './ImageBox.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Likes } from '../Likes'
import { Comments } from '../Comments'

export class ImageBox extends Component {

    render() {
        const { image, likes, comments, id } = this.props;

        return (
            <Link to={`/posts/${id}`}>
                <div className="gallery-item">
                    <img src={image} className="gallery-image" alt=""/>
                    <div className="gallery-item-info">
                        <ul>
                            <Likes likes={likes}/>
                            <Comments comments={comments}/>
                        </ul>
                    </div>
                </div>
            </Link>
        );
    }
}

ImageBox.propTypes = {
    image: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
    id: PropTypes.string,
};
