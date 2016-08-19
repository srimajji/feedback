import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import AuthContainer from './AuthContainer';

@connect(state => ({ ...state.AuthReducer }))

class MainContainer extends Component {
	render() {
		const { dispatch, jwtToken } = this.props;
		return (
			<div>
                <Navbar />
				{ jwtToken ?
					<div className='container'>
						{ this.props.children }
					</div> : <AuthContainer />
				}
            </div>
		);
	}
}

export default MainContainer;