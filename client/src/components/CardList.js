import React from 'react';

const CardList = ({items}) => {
    let listView = [];
    items.map((item, key) => {
        listView.push(
            <li className='collection-item' key={key}>
                <span className='title'>{item.title || item.name}</span>
                <p>{item.description || item.body}</p>
            </li>
        )
    });
    return(
        <ul className='collection'>
            { listView }
        </ul>
    )
}

export default CardList;