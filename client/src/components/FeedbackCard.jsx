import React, { Component } from 'react';

class FeedbackCard extends Component {
    render() {
        const feedback = this.props.feedback;
        return (
            <div className='row'>
                <div className='col s12 m6'>
                    <div className='card blue-grey darken-1'>
                        <div className='card-content white-text'>
                            <span className='card-title'>{feedback.company.name}</span>
                            <p>{feedback.body}</p>
                        </div>
                        <div className='card-action right-align'>
                            <a href='#'>Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedbackCard;