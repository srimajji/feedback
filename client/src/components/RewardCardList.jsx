import React, { Component } from 'react';

import RewardCard from './RewardCard';

class RewardCardList extends Component {
	render() {
		const arr = [1, 2, 3, 4, 5];
		const reward = { name: 'Target 10% off', description: '10% off any purchase over $50' };

		return (
			<div className='row'>
				<ul className='col s12 m6'>
					{arr.map((num, index) => {
						return <RewardCard key={index} reward={reward} />;
					}) }
				</ul>
			</div>
		);
	}
}

export default RewardCardList;