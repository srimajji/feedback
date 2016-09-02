import React, { Component } from 'react';

const CompanyCard = ({company, newFeedbackOnClick}) => {
	return (
		<div className='row'>
			<div className='col s12 m6'>
				<div className='card blue-grey darken-1'>
					<div className='card-content white-text'>
						<span className='card-title'>{company.name}</span>
						<p>{company.description}</p>
					</div>
					<div className='card-action right-align'>
						<a onClick={() => newFeedbackOnClick(company)} >Feedback</a>
						<a href='#'>Edit</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CompanyCard;