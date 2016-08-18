import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';

class AuthContainer extends Component {
    _login(event) {
        event.preventDefault();

    }

    render() {
        return (
            <div className='auth-container'>
                <LoginForm />
            </div>
        );
    }
}

export default AuthContainer;