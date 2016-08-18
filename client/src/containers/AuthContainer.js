import React, { Component } from 'react';

import LogInForm from '../components/LogInForm';
import { authUser } from '../actions';

class AuthContainer extends Component {

    render() {
        return (
            <div className='auth-container'>
                <LogInForm />
            </div>
        );
    }
}

export default AuthContainer;