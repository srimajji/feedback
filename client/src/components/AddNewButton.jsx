import React, { Component } from 'react';

const AddNewButton = (props) => {
    return (
        <div className='fixed-action-btn click-to-toggle add-new-button'>
            <a className='btn-floating btn-large red'>
                <i className='large material-icons'>mode_edit</i>
            </a>
            <ul>
                <li>
                    <a className='btn-floating red tooltipped' data-position='left' data-tooltip='New company'>
                        <i className='material-icons'>business</i>
                    </a>
                </li>
                <li>
                    <a className='btn-floating red tooltipped' data-position='left' data-tooltip='New feedback'>
                        <i className='material-icons'>message</i>
                    </a>
                </li>
    	    </ul>
        </div>
    );
}

export default AddNewButton;