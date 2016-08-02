import React, { Component } from 'react';

class NewCompanyModal extends Component {
	render() {
		return (
			<div id='new-company-modal' className='modal'>
				<div className='modal-content'>
					<div className='row'>
						<form className='col s12 m6'>
							<div className='row'>
								<div className='input-field col s12'>
									<input placeholder='Placeholder' id='first_name' type='text' className='validate' />
									<label htmlFor='first_name'>First Name</label>
								</div>
								<div className='input-field col s12'>
									<input placeholder='Placeholder' id='last_name' type='text' className='validate' />
									<label htmlFor='last_name'>Last Name</label>
								</div>
								<div className='input-field col s12'>
									<input placeholder='Placeholder' id='last_name' type='text' className='validate' />
									<label htmlFor='last_name'>Last Name</label>
								</div>
								<div className='input-field col s12'>
									<input placeholder='Placeholder' id='last_name' type='text' className='validate' />
									<label htmlFor='last_name'>Last Name</label>
								</div>
								<div className='input-field col s12'>
									<input placeholder='Placeholder' id='last_name' type='text' className='validate' />
									<label htmlFor='last_name'>Last Name</label>
								</div>
								<div className='input-field col s12'>
									<input placeholder='Placeholder' id='last_name' type='text' className='validate' />
									<label htmlFor='last_name'>Last Name</label>
								</div>
							</div>
						</form>
					</div>
					<div className='modal-footer'>
						<a href='#' className='modal-action modal-close waves-effect waves-green btn-flat'>Submit</a>
						<a href='#' className='modal-action modal-close waves-effect waves-green btn-flat'>Cancel</a>
					</div>
				</div>
			</div>
		)
	}
}

export default NewCompanyModal;