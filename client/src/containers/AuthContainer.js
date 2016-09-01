import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivityBar from '../components/ActivityBar';
import { loginUser, createUser } from '../actions';

@connect(state => ({...state.AuthReducer}))

class AuthContainer extends Component {
    constructor() {
        super();
        this.state = {
            createUser: false
        };

        this._onClickSignUp = this._onClickSignUp.bind(this);
        this._onFormSubmitToLogin = this._onFormSubmitToLogin.bind(this);
        this._onFormSubmitToCreateUser = this._onFormSubmitToCreateUser.bind(this);
    }

    _onFormSubmitToLogin(event) {
        event.preventDefault();
        this.props.dispatch(loginUser(this.refs.username.value, this.refs.password.value));
    }

    _onFormSubmitToCreateUser(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value,
            email: this.refs.email.value
        }
        dispatch(createUser(user));
    }

    _login(event) {
        event.preventDefault();

    }

    _onClickSignUp(event) {
        this.setState({ createUser: !this.state.createUser });
        event.preventDefault();
    }

    render() {
        const { errorMsg, isFetching } = this.props;
        const emailInputView = (
            <div className='input-field col s12'>
                <input placeholder='email' id='email' type='email' ref='email' required/>
                <label htmlFor='email'>Email</label>
            </div>
        )
        return (
            <div className='auth-container'>
                <div className='row'>
                    <form className='col s12' ref='login_form' onSubmit={this.state.createUser ? this._onFormSubmitToCreateUser : this._onFormSubmitToLogin}>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input placeholder='Username' id='username' type='text' ref='username' required/>
                                <label htmlFor='username'>Username</label>
                            </div>
                            { this.state.createUser ? emailInputView : null }
                            <div className='input-field col s12'>
                                <input placeholder='password' id='password' type='password' ref='password' required/>
                                <label htmlFor='password'>Password</label>
                            </div>
                            <button className="btn waves-effect waves-light col s5 right">{ this.state.createUser ? 'Create' : 'Log In'}</button>
                            <button className="btn waves-effect waves-light col s5 left" onClick={this._onClickSignUp}>{this.state.createUser ? 'Cancel' : 'Sign Up' }</button>
                        </div>
                    </form>
                </div>
                { isFetching ? <ActivityBar /> : null }
                <p className='red-text center-align'>{errorMsg}</p>
            </div>
        );
    }
}

export default AuthContainer;