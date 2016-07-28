import React, { Component } from 'react';

import NewFeedbackModal from './NewFeedbackModal';



class AddNewButton extends Component {
    constructor() {
        super();

        this.onClickNewFeedback = this.onClickNewFeedback.bind(this);
    }

    onClickNewFeedback() {
        $('#new-feedback-modal').openModal();
    }

    render() {
        return (
            <div>
                <NewFeedbackModal />
                <div className='fixed-action-btn click-to-toggle add-new-button'>
                    <a className='btn-floating btn-large red'>
                        <i className='large material-icons'>mode_edit</i>
                    </a>
                    <ul>
                        <li onClick={this.onClickNewFeedback}>
                            <a className='btn-floating red tooltipped' data-position='left' data-tooltip='New company'>
                                <i className='material-icons'>business</i>
                            </a>
                        </li>
                        <li onClick={this.onClickNewFeedback}>
                            <a className='btn-floating red tooltipped' data-position='left' data-tooltip='New feedback'>
                                <i className='material-icons'>message</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AddNewButton;