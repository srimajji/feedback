import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import constants from '../constants';
import { newFeedback } from '../actions';

@connect(state => ({}))

class NewFeedbackModal extends Component {
	constructor() {
		super();

		this.state = {
			category: ''
		}

		this._onChangeCategory = this._onChangeCategory.bind(this);
		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	componentDidUpdate() {
		$('select').material_select();
	}

	_onChangeCategory(event) {
		console.log(event);
	}

	_handleFormSubmit(event) {
		event.preventDefault();
		const { company } = this.props;
		const feedback = {
			title: this.refs.title.value,
			body: this.refs.body.value,
			category: this.refs.category.value,
			company: company.id };
		this.props.dispatch(newFeedback(feedback));
		$('#new-feedback-modal').closeModal();
		browserHistory.push('/submissions');
	}

	render () {
		const { company } = this.props;
		return (
			<div id='new-feedback-modal' className='modal'>
				<div className='modal-content'>
					<h5>{company.name.toUpperCase()}</h5>
					<form className='col s12 m6' action='' ref='new_feedback' onSubmit={this._handleFormSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<input placeholder='Enter feedback' type='text' className='validate materialize-input' ref='title' required/>
								<label htmlFor='title' className='active'>Title</label>
							</div>
							<div className="input-field col s12">
								<select ref='category' required value={this.state.category}>
									<option key='0' disabled>Select category</option>
									{ company.categories.map((category, key) => {
										return <option value={category.name} key={key}>{category.name}</option>
									})}
								</select>
								<label>Category</label>
							</div>
							<div className='input-field col s12'>
								<textarea placeholder='Enter feedback' type='text' className='validate materialize-textarea' ref='body' required/>
								<label htmlFor='decription' className='active'>Body</label>
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