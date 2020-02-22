import './Auth.scss';

import React, { Component } from 'react';

import { InputAuth } from 'components/InputAuth';

export class Auth extends Component {
    state = {
        username: 'Theron_Kautzer95@gmail.com',
        password: 'qwerty',
        classNameUsername: 'effect',
        classNamePassword: 'effect'
    };

    handleSuccess = (token, id) => {
        this.setState({ token, id }, () => {
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
        });
        this.props.history.replace('/posts');
    };

    handleSignIn = () => {
        const { username, password } = this.state;

        fetch('http://localhost:8888/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
            .then((response) => response.json())
            .then((data) => {
                this.handleSuccess(data.token, data.user._id);
            });
    };

    handleTextChange = ({target: {name, value}}) => {
        const nameState = name === 'username' ? 'classNameUsername' : 'classNamePassword';
        const newName = value ? 'effect has-content' : 'effect';

        this.setState({
            [name]: value,
            [nameState]: newName,
        })
    };

    render() {
        const {username, password, classNameUsername, classNamePassword} = this.state;

        return (
            <div className="container auth-box">
                <h2>Sign In</h2>
                <InputAuth
                    className={classNameUsername}
                    name='username'
                    value={username}
                    handleTextChange={this.handleTextChange}
                    label='Username'
                />
                <InputAuth
                    className={classNamePassword}
                    name='password'
                    value={password}
                    handleTextChange={this.handleTextChange}
                    label='Password'
                />
                <button className="button-send" onClick={this.handleSignIn}>Sign In</button>
            </div>
        );
    }
}
