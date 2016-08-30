import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Card from '../components/Card';
import NewFeedbackModal from '../components/NewFeedbackModal';
import { getFeedbacks } from '../actions';

@connect(state => ({ ...state.FeedbackReducer }))

class FeedbackContainer extends Component {
    componentWillMount() {
        this.props.dispatch(getFeedbacks());
    }

    _openNewFeedbackModal() {
        $('#new-feedback-modal').openModal();

    }

    render() {
        const { feedbacks, dispatch } = this.props;
        return (
                <div className='row'>
                        <Link to='submissions/new' className='waves-effect waves-light btn' >New submission</Link>
                        { this.props.children }
                </div>
        );
    }
}

export default FeedbackContainer;