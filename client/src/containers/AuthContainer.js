import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActivityBar from '../components/ActivityBar';
import { loginUser } from '../actions';

@connect(state => ({...state.AuthReducer}))

class AuthContainer extends Component {
    constructor() {
        super();
        this.state = {
            signUp: false
        };

        this._onClickSignUp = this._onClickSignUp.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
    }

    _onFormSubmit(event) {
        event.preventDefault();
        this.props.dispatch(loginUser(this.refs.username.value, this.refs.password.value));
    }

    _login(event) {
        event.preventDefault();

    }

    _onClickSignUp(event) {
        console.log('clicked');
        this.setState({ signUp: !this.state.signUp });
        event.preventDefault();
    }

    render() {
        const { errorMsg, isFetching } = this.props;
        const emailInputView = (
            <div className='input-field col s12'>
                <input placeholder='email' id='email' type='email' ref='email' />
                <label htmlFor='email'>Email</label>
            </div>
        )
        return (
            <div className='auth-container'>
                <div className='row'>
                    <form className='col s12' ref='login_form' onSubmit={this._onFormSubmit}>
                        <div className='row'>
                            <div className='input-field col s12'>
                                <input placeholder='Username' id='username' type='text' ref='username'/>
                                <label htmlFor='username'>Username</label>
                            </div>
                            { this.state.signUp ? emailInputView : null }
                            <div className='input-field col s12'>
                                <input placeholder='password' id='password' type='password' ref='password' />
                                <label htmlFor='password'>Password</label>
                            </div>
                            <button className="btn waves-effect waves-light col s5 left" onClick={this._onClickSignUp}>{this.state.signUp ? 'Cancel' : 'Sign Up' }</button>
                            <button className="btn waves-effect waves-light col s5 right">{ this.state.signUp ? 'Create' : 'Log In'}</button>
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