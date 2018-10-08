import React from 'react';

export const Rider = (props) => {
    
    return (
        <div className="rider">            
            <b>{props.name}</b>
            <p>{props.nationality}</p>
        </div>
    )
}