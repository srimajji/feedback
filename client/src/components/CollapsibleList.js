import React from 'react';

const CollapsibleList = ({items}) => {
    return (
        <ul className='collapsible popout' data-collapsible='accordion'>
            { items.map((item, key) => {
                return (
                    <li key={key}>
                        <div className='collapsible-header'>{item.title}</div>
                        <div className='collapsible-body'><p>{item.body}</p></div>
                    </li>
                )
            })}
        </ul>
    );
}

export default CollapsibleList