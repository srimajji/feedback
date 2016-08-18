import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Card from '../components/Card';
import NewFeedbackModal from '../components/NewFeedbackModal';

@connect(state => ({ ...state.FeedbackReducer }))

class FeedbackContainer extends Component {
    _openNewFeedbackModal() {
        $('#new-feedback-modal').openModal();
        // return { type: 'FEEDBACK_NEW', title: 'New feedback', body: 'some body here' };
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
                        <a className='waves-effect waves-light btn' onClick={this._openNewFeedbackModal}>New feedback</a>
                    </div>
                </div>
                <NewFeedbackModal />
            </div>
        );
    }
}

export default FeedbackContainer;