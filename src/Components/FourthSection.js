import React, {useState} from 'react';
import {css} from '@emotion/core';

const FourthSection = () => {
    const [state, setstate] = useState([{
        name:"Ground Water Reacharge"
    },
    {
        name:"Rain Water Harvesting"
    },
    {
        name:"Organic waste Convertor"
    },
    {
        name:"Water Efficient Mechanism"
    },
    {
        name:"Enery Efficiency"
    },
    {
        name:"Access to solar Heated water"
    }
   ]);
    const displayingNames = () => {
        return state.map((item,i)=>
        <div key={i}>
          {item.name}
        </div>
        )
    }
    return (
        <div css={styleforSectionFour}>
            {displayingNames()}
        </div>
    );
};

export default FourthSection;

const styleforSectionFour = css`
 display:grid;
 grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
 text-align:center;
 div{
     background:linear-gradient(45deg, #19544b 0%, #19544bdd 100%);
     color:#fff;
     padding:40px 10px;
     letter-spacing:1px;
     font-size:1em;
     font-weight:600;
     text-transform: uppercase;
    :nth-child(1){
     background:linear-gradient(45deg, #dbc617 0%, #987b05 100%);
    }
    :hover{
        background:linear-gradient(45deg, #dbc617 0%, #987b05 100%);
        cursor:pointer; 
    }
 }
`;