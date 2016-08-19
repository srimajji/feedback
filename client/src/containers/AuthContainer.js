import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authUser } from '../actions';

@connect(state => ({...state.AuthReducer}))

class AuthContainer extends Component {
    constructor() {
        super();

        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    _onFormSubmit(event) {
        event.preventDefault();
        this.props.dispatch(authUser(this.refs.username.value, this.refs.password.value));
    }

    _login(event) {
        event.preventDefault();

    }

    render() {
        return (
            <div className='auth-container'>
                <div className='row'>
                    <form className='col s12' ref='login_form' onSubmit={this._onFormSubmit}>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input placeholder='Username' id='username' type='text' ref='username'/>
                                <label htmlFor='username'>Username</label>
                            </div>
                            <div className='input-field col s12'>
                                <input placeholder='password' id='password' type='password' ref='password' />
                                <label htmlFor='password'>Password</label>
                            </div>
                            <button className="btn waves-effect waves-light col s12" type='submit'>Log In
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthContainer;