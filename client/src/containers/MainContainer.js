import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import AuthContainer from './AuthContainer';

@connect(state => ({ isAuthenticated: state.AuthReducer.isAuthenticated }))

class MainContainer extends Component {
	render() {
		const { dispatch, isAuthenticated } = this.props;
		return (
			<div>
				<Navbar />
				<div className='container'>
					{ isAuthenticated ?
						this.props.children : <AuthContainer />
					}
				</div>
			</div>
		);
	}
}

export default MainContainer;