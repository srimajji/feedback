import React, { Component } from 'react';

import FeedbackCard from './FeedbackCard';

class FeedbackCardList extends Component {
    render() {
        const arr = [1, 2, 3, 4, 5];
        return (
            <div className='row'>
                <ul className='col s12 m6'>
                    {arr.map((num, index) => {
                        return <FeedbackCard key={index} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default FeedbackCardList;