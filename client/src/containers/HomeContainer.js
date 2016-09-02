import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import Card from '../components/Card';

@connect(state => ({ feedbacks: state.FeedbackReducer.feedbacks, companies: state.CompanyReducer.companies }))
class HomeContainer extends Component {
	render() {
		const { feedbacks, companies } = this.props;
		return (
			<div className='row'>
				<div className='col s12'>
					<Card title={'Feedbacks'} body={feedbacks.length}/>
					<Card title={'Companies'} body={companies.length}/>
				</div>
			</div>
		);
	}
}

export default HomeContainer;