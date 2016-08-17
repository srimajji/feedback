import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Card from '../components/Card';

@connect(state => ({ ...state.FeedbackReducer }))

class FeedbackContainer extends Component {
    _newFeedback() {
        return { type: 'FEEDBACK_NEW', title: 'New feedback', body: 'some body here' };
    }

    render() {
        const { feedbacks, dispatch } = this.props;
        return (
            <div className='row'>
                <div className='col s12'>
                    { feedbacks.map(( feedback, key ) => {
                        return <Card title={feedback.title} body={feedback.body} key={key}/>
                    })}
                    <a className='waves-effect waves-light btn' onClick={() => dispatch(this._newFeedback())}>New feedback</a>
                </div>
            </div>
        );
    }
}

export default FeedbackContainer;