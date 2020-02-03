import React from 'react';
import './Description.css';


const Description = (props) => {
    return (
        <div className="description_main">
            {props.children}
        </div>
    );
};

export default Description;