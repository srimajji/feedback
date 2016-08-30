import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../components/CardList';
import { getCompanyList } from '../actions';

@connect(state => ({ ...state.CompanyReducer }))

class NewFeedbackContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getCompanyList());
    }

    render() {
        const { companies, dispatch } = this.props;

        return (
            <div className='row'>
                <CardList items={companies} />
            </div>
        )
    }
}

export default NewFeedbackContainer;