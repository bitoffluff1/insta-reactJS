import React, { Component, Fragment } from 'react';

import { Modal } from '../components/Modal';
import { Loading } from '../components/Loading';
import { Post } from '../components/Post';

export default class PostContainer extends Component {
    state = {
        loading: false,
        picture: null,
        owner: null,
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        this.setState({ loading: true});

        fetch(`http://localhost:8888/api/photos/${id}`, {
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    picture: data.image,
                    owner: data.owner,
                });
            })
            .catch(() => {
                this.setState({ loading: false });
            })
    };

    handleModalClose = () => {
        this.props.history.replace('/posts');
    };

    render() {
        const { loading, picture, owner } = this.state;

        return (
            <Fragment>
                {picture && <Post picture={picture} owner={owner} onClose={this.handleModalClose} />}
                {loading && <Modal onClose={this.handleModalClose} >
                    <Loading/>
                </Modal>}
            </Fragment>
        );
    }
}
