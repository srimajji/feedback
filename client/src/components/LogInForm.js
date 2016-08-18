import React, { Component } from 'react';

const LogInForm = ({logIn}) => {
    return (
        <div className='row'>
            <form className='col s12' onSubmit={logIn}>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input placeholder='Username' id='username' type='text' />
                        <label htmlFor='username'>Username</label>
                    </div>
                    <div className='input-field col s12'>
                        <input placeholder='password' id='password' type='password' />
                        <label htmlFor='password'>Password</label>
                    </div>
                    <button className="btn waves-effect waves-light col s12" type='submit'>Log In
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LogInForm;