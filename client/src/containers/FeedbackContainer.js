import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ActivityBar from '../components/ActivityBar';
import Card from '../components/Card';
import NewFeedbackModal from '../components/NewFeedbackModal';
import { fetchFeedbacks } from '../actions';

@connect(state => ({ ...state.FeedbackReducer }))

class FeedbackContainer extends Component {
	componentWillMount() {
		this.props.dispatch(fetchFeedbacks());
	}

	_openNewFeedbackModal() {
		$('#new-feedback-modal').openModal();

	}

	render() {
		const { feedbacks, isFetching, dispatch } = this.props;
		return (
			<div className='row'>
				{ isFetching ? <ActivityBar /> : feedbacks.map((feedback, key) => {
					const title = feedback.company.name.toUpperCase() + ':  ' + feedback.title
					return <Card title={title} body={feedback.body} key={key} />
				}) }
				<Link to='submissions/new' className='waves-effect waves-light btn'>New submission</Link>
			</div>
		);
	}
}

export default FeedbackContainer;