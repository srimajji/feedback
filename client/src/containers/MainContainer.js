import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class MainContainer extends Component {
	render() {
		return (
			<div>
                <Navbar />
                <div className='container'>
                    { this.props.children }
                </div>
            </div>
		);
	}
}

export default MainContainer;