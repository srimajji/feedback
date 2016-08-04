import React, { Component } from 'react';

class NewFeedbackModal extends Component {
	constructor() {
		super();

		this.state = {
			selectView: null
		};
		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	componentDidMount() {
		$('select').material_select();
	}

	_handleFormSubmit(event) {
		const feedback = {
			description: this.refs.feedback_body.value,
			category: this.refs.feedback_category.value
		}
		this.props.onSubmitFeedback(feedback);
		event.preventDefault();
	}
	render () {
		return (
			<div id='new-feedback-modal' className='modal'>
				<div className='modal-content'>
					<h4>New Feedback</h4>
					<form className='col s12 m6' action='' ref='new_feedback' onSubmit={this._handleFormSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<textarea placeholder='Enter feedback' type='text' className='validate materialize-textarea' ref='feedback_body' required/>
								<label htmlFor='body' className='active'>Description</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Enter category' type='text' className='validate materialize-textarea' ref='feedback_category' required/>
								<label htmlFor='category' className='active'>Category</label>
							</div>
						</div>
						<div className='right-align'>
							<button className="btn waves-effect waves-light col s6" type='submit'>Submit
								<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default NewFeedbackModal;