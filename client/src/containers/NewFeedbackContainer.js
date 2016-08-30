import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

import { getCompanyList, searchCompanies } from '../actions';

@connect(state => ({ ...state.CompanyReducer }))

class NewFeedbackContainer extends Component {
    constructor() {
        super();

        this._onSearchBarInputChange = this._onSearchBarInputChange.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getCompanyList());
    }

    _onSearchBarInputChange(event) {
        const { companies, dispatch } = this.props;
        const searchTerm = event.target.value;
		dispatch(searchCompanies(companies, searchTerm));
	}

    render() {
        const { companySearchList, dispatch } = this.props;
        return (
            <div className='row'>
                <SearchBar onInputChange={this._onSearchBarInputChange} />
                <CardList items={companySearchList} />
            </div>
        )
    }
}

export default NewFeedbackContainer;