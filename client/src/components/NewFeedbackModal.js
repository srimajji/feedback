import React, { Component } from 'react';
import { connect } from 'react-redux';

import constants from '../constants';
import { newFeedback } from '../actions';

@connect(state => ({ companies: state.companies }))

class NewFeedbackModal extends Component {
	constructor() {
		super();

		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	componentDidMount() {
		$('select').material_select();
	}

	_handleFormSubmit(event) {
		event.preventDefault();
		
		const feedback = { title: this.refs.title.value, body: this.refs.body.value };
		this.props.dispatch(newFeedback(feedback));
		$('#new-feedback-modal').closeModal();
	}

	render () {
		return (
			<div id='new-feedback-modal' className='modal'>
				<div className='modal-content'>
					<h4>Add new feedback</h4>
					<form className='col s12 m6' action='' ref='new_feedback' onSubmit={this._handleFormSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<input placeholder='Enter feedback' type='text' className='validate materialize-input' ref='title' required/>
								<label htmlFor='title' className='active'>Title</label>
							</div>
							<div className='input-field col s12'>
								<textarea placeholder='Enter description' type='text' className='validate materialize-textarea' ref='body' required/>
								<label htmlFor='decription' className='active'>Description</label>
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