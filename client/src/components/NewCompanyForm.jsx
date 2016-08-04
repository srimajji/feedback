import React, { Component } from 'react';

class NewCompanyForm extends Component {
	constructor() {
		super();
		this._handleFormSubmit = this._handleFormSubmit.bind(this);
		this._newCompanySuccess = this._newCompanySuccess.bind(this);
		this._newCompanyFail = this._newCompanyFail.bind(this);
		this.state = {
			newCompany: null
		};
	}

	componentDidMount() {
		$('.chips').material_chip();
	}

	_newCompanySuccess(data) {
		console.log(data);
	}

	_newCompanyFail(error) {
		console.log(error);
	}

	_handleFormSubmit(event) {
		let categories = [], statuses = [];
		this.refs.company_categories.value.split(' ').forEach((category) => {
			categories.push({ name: category });
		});
		this.refs.company_status_types.value.split(' ').forEach((status) => {
			statuses.push({ name: status });
		});
		const newCompanyForm = this.refs.new_company_form;
		$.ajax({
			url: 'http://localhost:3000/api/companies',
			type: 'POST',
			data: {
				name: this.refs.company_name.value,
				alias: this.refs.company_alias.value,
				description: this.refs.company_description.value,
				website: this.refs.company_website.value,
				categories: categories,
				feedbackStatuses: statuses
			}}).done((response) => {
				const notification = 'Company ' + response.name + ' created successfully';
				Materialize.toast(notification, 4000);
				newCompanyForm.reset();
			}).fail((error) => {
				console.error(JSON.stringify(error.responseText));
			});
		event.preventDefault();
	}

	render() {
		return (
				<div className='row'>
					<h4 className='center-align'>New Company </h4>
					<form className='col s12 m6' action='' ref='new_company_form' onSubmit={this._handleFormSubmit}>
						<div className='row'>
							<div className='input-field col s12'>
								<input placeholder='Enter company name' type='text' className='validate' ref='company_name' required/>
								<label htmlFor='first_name' className='active'>Name</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Enter company alias (must be unique)' type='text' className='validate' ref='company_alias' required/>
								<label htmlFor='last_name' className='active'>Alias</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Enter description' type='text' className='validate' ref='company_description' />
								<label htmlFor='last_name' className='active'>Description</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Website url' type='url' className='validate' ref='company_website'/>
								<label htmlFor='last_name' className='active'>Website</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Categories (seperated by space)' type='text' className='validate' ref='company_categories'/>
								<label htmlFor='last_name' className='active'>Categories</label>
							</div>
							<div className='input-field col s12'>
								<input placeholder='Feedback status types (seperated by space)' type='text' className='validate' ref='company_status_types' required/>
								<label htmlFor='last_name' className='active'>Status types</label>
							</div>
							<button className="btn waves-effect waves-light col s12" type='submit'>Submit
								<i className="material-icons right">send</i>
							</button>
						</div>
					</form>
				</div>
		);	
	}
}

export default NewCompanyForm;