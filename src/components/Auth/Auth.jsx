import './Auth.scss';

import React, { Component } from 'react';

export class Auth extends Component {
    state = {
        username: 'Wilma87@gmail.com',
        password: 'qwerty',
        classNameUsername: 'effect',
        classNamePassword: 'effect'
    };

    handleSuccess = (token) => {
        this.setState({ token }, () => {
            localStorage.setItem('token', token);
        });
        this.props.history.replace('/');
    };

    handleSignIn = () => {
        const {username, password} = this.state;

        fetch('http://localhost:8888/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
            .then((response) => response.json())
            .then((data) => {
                this.handleSuccess(data.token);
            });
    };

    handleTextChange = ({target: {name, value}}) => {
        let newName = "";
        let nameState = "";
        if(name === "username"){
            newName = (value) ? "effect has-content" : "effect";
            nameState = "classNameUsername";
        } else if (name === "password"){
            newName = (value) ? "effect has-content" : "effect";
            nameState = "classNamePassword";
        }

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
                <div className="col-3 input-effect">
                    <input className={classNameUsername} type="text" name="username" value={username}
                           onChange={this.handleTextChange}/>
                    <label>Username</label>
                    <span className="focus-border" />
                </div>
                <div className="col-3 input-effect">
                    <input className={classNamePassword} type="text" name="password" value={password}
                           onChange={this.handleTextChange}/>
                    <label>Password</label>
                    <span className="focus-border" />
                </div>
                <button className="button-send" onClick={this.handleSignIn}>Sign In</button>
            </div>
        );
    }
}
