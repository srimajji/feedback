import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import NewFeedbackModal from '../components/NewFeedbackModal';
import { fetchCompanyList, searchCompanies } from '../actions';

@connect(state => ({ ...state.CompanyReducer }))

class NewFeedbackContainer extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            companyClicked: { name: 'default', categories: ['default'] }
        };

        this._onClickCompany = this._onClickCompany.bind(this);
        this._onSearchBarInputChange = this._onSearchBarInputChange.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchCompanyList());
    }

    _onClickCompany(company) {
       this.setState({ companyClicked: company });
       $('#new-feedback-modal').openModal();
    }

    _onSearchBarInputChange(event) {
        this.setState({ searchTerm: event.target.value });
	}

    render() {
        const { companies, dispatch } = this.props;
        const companyFilteredList = companies.filter(company => company.name.indexOf(this.state.searchTerm) !== -1)
        return (
            <div>
                <div className='row'>
                    <SearchBar onInputChange={this._onSearchBarInputChange} />
                    <CardList items={companies} onItemClick={this._onClickCompany}/>
                </div>
                <NewFeedbackModal company={this.state.companyClicked} />
            </div>
        )
    }
}

export default NewFeedbackContainer;