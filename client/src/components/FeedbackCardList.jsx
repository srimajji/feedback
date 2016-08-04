import React, { Component } from 'react';

import FeedbackCard from './FeedbackCard';

class FeedbackCardList extends Component {
    constructor() {
        super();
        
        this.state = {
            feedbacks: []
        };
    }
    componentDidMount() {
        $.get('http://localhost:3000/api/feedbacks', function(data) {
                this.setState({ feedbacks: data });
        }.bind(this));
    }

    render() {
        return (
            <div className='row'>
                <ul className='col s12 m6'>
                    {this.state.feedbacks.map((feedback, key) => {
                        return <FeedbackCard key={key} feedback={feedback} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default FeedbackCardList;