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
            <div>
                <div className='row'>
                    <div className='col s12'>
                        { feedbacks.map(( feedback, key ) => {
                            return <Card title={feedback.title} body={feedback.body} key={key}/>
                        })}
                        <a className='waves-effect waves-light btn' onClick={this._openNewFeedbackModal}>New submission</a>
                    </div>
                </div>
                <NewFeedbackModal />
            </div>
        );
    }
}

export default FeedbackContainer;