import React, { Component } from 'react';

import NewCompanyForm from '../components/NewCompanyForm';

class NewCompanyContainer extends Component {
	render() {
		return (
			<div className='new-company-container'><NewCompanyForm /></div>
		);
	}
}

export default NewCompanyContainer;