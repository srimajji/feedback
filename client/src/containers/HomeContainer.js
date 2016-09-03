import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import CollapsibleList from '../components/CollapsibleList';
import Card from '../components/Card';
import { fetchFeedbacks } from '../actions';

@connect(state => ({ ...state.FeedbackReducer }))

class HomeContainer extends Component {
	componentDidMount() {
		$('.collapsible').collapsible({
			accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		});
		this.props.dispatch(fetchFeedbacks());
	}

	render() {
		const { feedbacks } = this.props;
		return (
			<div className='row'>
				<div className='col s12'>
					<CollapsibleList items={feedbacks} />
				</div>
			</div>
		);
	}
}

export default HomeContainer;