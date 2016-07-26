import React, { Component } from 'react';

const CompanyCard = ({company}) => {
    return (
        <div className='row'>
            <div className='col s12 m6'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <span className='card-title'>{company.name}</span>
                        <p>{company.description}</p>
                    </div>
                    <div className='card-action align-right'>
                        <a href='#'>Edit...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCard;