import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

import { fetchCompanyList, searchCompanies } from '../actions';

@connect(state => ({ ...state.CompanyReducer }))

class NewFeedbackContainer extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        };

        this._onSearchBarInputChange = this._onSearchBarInputChange.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchCompanyList());
    }

    _onSearchBarInputChange(event) {
        this.setState({ searchTerm: event.target.value });
	}

    render() {
        const { companies, dispatch } = this.props;
        const companyFilteredList = companies.filter(company => company.name.indexOf(this.state.searchTerm) !== -1)
        return (
            <div className='row'>
                <SearchBar onInputChange={this._onSearchBarInputChange} />
                <CardList items={companyFilteredList} />
            </div>
        )
    }
}

export default NewFeedbackContainer;