import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render() {
        console.log(this.props.location);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="admin">Home</Link></li>
                        <li><Link to="admin/feedback">Feedback</Link></li>
                        <li><Link to="admin/companies">Companies</Link></li>
                        <li><Link to="admin/responses">Responses</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;