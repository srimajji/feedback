import React from 'react';

const NewFeedbackModal = () => {
	return (
		<div id='new-feedback-modal' className='modal'>
			<div className='modal-content'>
				<h4>New Feedback</h4>
				<p>Enter feedback ...</p>
			</div>
			<div className='modal-footer'>
				<a href='#' className='modal-action modal-close waves-effect waves-green btn-flat'>Submit</a>
				<a href='#' className='modal-action modal-close waves-effect waves-green btn-flat'>Cancel</a>
			</div>
		</div>
	);
}

export default NewFeedbackModal;