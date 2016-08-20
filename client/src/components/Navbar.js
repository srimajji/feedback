import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { logoutUser } from '../actions';

@connect(state => ({ 
    isAuthenticated: state.AuthReducer.isAuthenticated, 
    user: state.AuthReducer.user 
}))

class Navbar extends Component {
    constructor() {
        super();

        this._onClickLogOut = this._onClickLogOut.bind(this);
    }
    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 150,
            edge: 'left',
            closeOnClick: true
        });
    }

    _onClickLogOut(event) {
        event.preventDefault();
        this.props.dispatch(logoutUser());
    }

    render() {
        const { dispatch, isAuthenticated, user } = this.props;
        const logoutDesktopMenu = (
            <ul className='left hide-on-med-and-down'>
                <li><Link to='/'>Home</Link></li>
            </ul>
        );
        const logoutMobileMenu = (
            <ul id='nav-mobile' className='side-nav'>
                <li><Link to='/'>Home</Link></li>
            </ul>
        );

        return (
            <div className='navbar-fixed'>
                <nav className='light-blue' role='navigation'>
                    <div className='nav-wrapper container'>
                        { isAuthenticated ?
                            <Link to='' className='brand-logo right' onClick={this._onClickLogOut}>Log Out</Link> 
                            : null }
                        { isAuthenticated ?
                            <ul className='left hide-on-med-and-down'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='feedbacks'>Feedbacks</Link></li>
                                <li><Link to='companies'>Companies</Link></li>
                            </ul> 
                            : logoutDesktopMenu
                        }
                        { isAuthenticated ?
                            <ul id='nav-mobile' className='side-nav'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='feedbacks'>Feedbacks</Link></li>
                                <li><Link to='companies'>Companies</Link></li>
                            </ul> : logoutMobileMenu
                        }
                        <a href='#' data-activates='nav-mobile' className='button-collapse'><i className='material-icons'>menu</i></a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;