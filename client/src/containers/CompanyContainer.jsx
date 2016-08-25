import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Card from '../components/Card';
import NewCompanyModal from '../components/NewCompanyModal';
import { getCompanyList } from '../actions';

@connect(state => ({ ...state.CompanyReducer }))

class CompanyContainer extends Component {
    componentWillMount() {
        this.props.dispatch(getCompanyList());
    }

    _openNewCompanyModal() {
        $('#new-company-modal').openModal();
    }

    render() {
        const { companies, dispatch } = this.props;
        return (
            <div>
                <div className='row'>
                    <div className='col s12'>
                        { companies.map(( company, key ) => {
                            return <Card title={company.name} body={company.description} key={key}/>
                        })}
                        <a className='waves-effect waves-light btn' onClick={this._openNewCompanyModal}>New company</a>
                    </div>
                </div>
                <NewCompanyModal />
            </div>
        );
    }
}

export default CompanyContainer;