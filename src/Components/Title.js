import React from 'react';
import './Title.css'

const Title = (props) => {
    return (
        <div className="main_title">
            {props.title}
        </div>
    );
};

export default Title;