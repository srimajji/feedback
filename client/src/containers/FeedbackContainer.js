import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class FeedbackContainer extends Component {
    render() {
            console.log(this.context.store);
        const { feedbacks, dispatch } = this.props;
        return (
            <div>
                Feedback container
            </div>
        );
    }
}

export default FeedbackContainer;