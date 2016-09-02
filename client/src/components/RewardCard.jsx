import React, { Component } from 'react';

const RewardCard = ({reward}) => {
	return (
		<div className='row'>
			<div className='col s12 m6'>
				<div className='card blue-grey darken-1'>
					<div className='card-content white-text'>
						<span className='card-title'>{reward.name}</span>
						<p>{reward.description}</p>
					</div>
					<div className='card-action right-align'>
						<a href='#'>Redeem</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RewardCard;