import React, { Component } from 'react';
import { Link } from 'react-router';

import RewardCardList from '../components/RewardCardList';

class RewardContainer extends Component {
    render() {
        return (
            <div>
                <RewardCardList />
            </div>
        );
    }
}

export default RewardContainer;