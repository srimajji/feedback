import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
    componentDidMount() {
        $('.button-collapse').sideNav({
            menuWidth: 150,
            edge: 'left',
            closeOnClick: true
        });
    }

    render() {
        return (
            <div className='navbar-fixed'>
                <nav className='light-blue' role='navigation'>
                    <div className='nav-wrapper container'>
                        <a href='#' className='brand-logo right'>Summer16</a>
                        <ul className='left hide-on-med-and-down'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='feedbacks'>Feedbacks</Link></li>
                            <li><Link to='companies'>Companies</Link></li>
                        </ul>
                        <ul id='nav-mobile' className='side-nav'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='feedbacks'>Feedbacks</Link></li>
                            <li><Link to='companies'>Companies</Link></li>
                        </ul>
                        <a href='#' data-activates='nav-mobile' className='button-collapse'><i className='material-icons'>menu</i></a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;