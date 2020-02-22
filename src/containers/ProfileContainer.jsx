import React, { Component } from 'react';

import { Profile } from '../components/Profile';

export default class ProfileContainer extends Component {
    state = {
        loading: false,
        user: null,
    };

    componentDidMount() {
        const id = localStorage.getItem('id');
        if (!id || id === 'null') {
            return this.props.history.replace('/auth');
        }

        this.loadProfile(id);
    };

    loadProfile = (id) => {
        this.setState({ loading: true });

        fetch(`http://localhost:8888/api/users/${id}`, {
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data,
                    loading: false,
                });
            })
            .catch(() => {
                this.setState({ loading: false });
            })
    };

    render() {
        const { user } = this.state;
        return (
            <Profile {...user}/>
        )
    };
}