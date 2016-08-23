import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Card from '../components/Card';
import NewFeedbackModal from '../components/NewFeedbackModal';

@connect(state => ({ ...state.CompanyReducer }))

class CompanyContainer extends Component {
    _openNewFeedbackModal() {
        $('#new-feedback-modal').openModal();
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
                        <a className='waves-effect waves-light btn' onClick={this._openNewFeedbackModal}>New feedback</a>
                    </div>
                </div>
                <NewFeedbackModal />
            </div>
        );
    }
}

export default CompanyContainer;