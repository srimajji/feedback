import React, { Component } from 'react';
import { Link } from 'react-router';

import FeedbackCardList from '../components/FeedbackCardList';

class FeedbackContainer extends Component {
    render() {
        return (
            <div>
                <FeedbackCardList />
            </div>
        );
    }
}

export default FeedbackContainer;