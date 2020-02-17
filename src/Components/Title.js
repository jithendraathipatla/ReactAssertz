import React from 'react';
import '../GlobalStyles/styles.css';

const Title = (props) => {
    return (
        <div className="main_title">
            <span className="underline">{props.title}</span>
        </div>
    );
};

export default Title;