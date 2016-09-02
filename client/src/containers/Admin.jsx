import React, { Component } from 'react';

import Navbar from '../components/Navbar';
class Admin extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					<h1> Feedback Admin Panel </h1>
				</div>
			</div>
		);
	}
}

export default Admin;