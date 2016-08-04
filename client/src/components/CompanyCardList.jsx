import React, { Component } from 'react';

import CompanyCard from './CompanyCard';

class CompanyCardList extends Component {
    constructor() {
        super();

        this.state = {
            companies: []
        };
    }

    componentDidMount() {
        let companies = [];
        $.get('http://localhost:3000/api/companies', function(data) {
                this.setState({ companies: data });
        }.bind(this));
    }

    render() {
        const newFeedbackOnClick = this.props.newFeedbackOnClick;
        return (
            <div className='row'>
                <ul className='col s12 m6'>
                    {this.state.companies.map((company, index) => {
                        return <CompanyCard key={index} company={company} newFeedbackOnClick={newFeedbackOnClick} />;
                    })}
                </ul>
            </div>
        );
    } 
}

export default CompanyCardList;