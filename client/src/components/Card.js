import React from 'react';


const Card = ({ title = 'Title', body = 'Body' }) => {

    return (
        <div className='card blue-grey darken-1'>
            <div className='card-content white-text'>
                <span className='card-title'>{ title }</span>
                <p>{ body }</p>
            </div>
        </div>
    );
}

export default Card;