import React from 'react';

const Guarantee = ({img, title, description}) => {
    return (
        <div className = 'guarantee'>
            <img src={img}  alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Guarantee;