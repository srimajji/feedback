import React, { Component } from 'react';
import { connect } from 'react-redux';

import constants from '../constants';
import { newCompany } from '../actions';

@connect(state => ({}))

class NewCompanyModal extends Component {
	constructor() {
		super();

		this._handleFormSubmit = this._handleFormSubmit.bind(this);
	}

	componentDidMount() {
		$('select').material_select();
	}

	_handleFormSubmit(event) {
		event.preventDefault();
		
		const company = { name: this.refs.name.value, alias: this.refs.alias.value, description: this.refs.description.value };
		this.props.dispatch(newCompany(company));
		$('#new-company-modal').closeModal();
	}

	render () {
		return (
			<div id='new-company-modal' className='modal'>
				<div className='modal-content'>
					<h4>Add new company</h4>
					<form className='col s12 m6' action='' ref='new_company' onSubmit={this._handleFormSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<input placeholder='Company name' type='text' className='validate materialize-input' ref='name' required/>
								<label htmlFor='name' className='active'>Name</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Company alias (unique)' type='text' className='validate materialize-input' ref='alias' required/>
								<label htmlFor='alias' className='active'>Alias</label>
							</div>
							<div className='input-field col s12'>
								<textarea placeholder='Company description' type='text' className='validate materialize-textarea' ref='description' />
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

export default NewCompanyModal;