import React from 'react';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
        <div className = 'tc  measure-narrow  grow  br3 bg-near-white pa3 ma2 dib bw2 shadow-5'>
            
            <img  className='' alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div className='helvetica '>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card