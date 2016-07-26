import React, { Component } from 'react';

import CompanyCard from './CompanyCard';

class CompanyCardList extends Component {
    render() {
        const arr = [1, 2, 3, 4, 5];
        const company = { name: 'Target', description: 'A store where you can get everything home related' };

        return (
            <div className='row'>
                <ul className='col s12 m6'>
                    {arr.map((num, index) => {
                        return <CompanyCard key={index} company={company} />;
                    })}
                </ul>
            </div>
        );
    } 
}

export default CompanyCardList;