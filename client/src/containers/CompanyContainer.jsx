import React, { Component } from 'react';

import CompanyCardList from '../components/CompanyCardList';
import NewFeedbackModal from '../components/NewFeedbackModal';

class CompanyContainer extends Component {
    constructor() {
        super();

        this.state = {
            currentCompany: null
        };

        this._newFeedbackOnClick = this._newFeedbackOnClick.bind(this);
        this._onSubmitFeedback = this._onSubmitFeedback.bind(this);
    }

    componentDidMount() {
        // here
    }

    _newFeedbackOnClick(company) {
        this.setState({ currentCompany: company });
        $('#new-feedback-modal').openModal();
    }

    _onSubmitFeedback(feedback) {
        $.ajax({
			url: 'http://localhost:3000/api/feedbacks',
			type: 'POST',
			data: {
				body: feedback.description,
                category: feedback.category,
                company: this.state.currentCompany._id
			}}).done((response) => {
				const notification = 'Feedback ' + response._id + ' created successfully';
				Materialize.toast(notification, 4000);
			}).fail((error) => {
				console.error(JSON.stringify(error.responseText));
        });
        $('#new-feedback-modal').closeModal();
    }

    render() {
        return (
            <div>
                <NewFeedbackModal onSubmitFeedback={this._onSubmitFeedback} company={this.state.currentCompany}/>
                <CompanyCardList newFeedbackOnClick={this._newFeedbackOnClick} />
            </div>
        );
    }
}

export default CompanyContainer;