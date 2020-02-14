import React,{useState} from 'react';
import { jsx, css } from '@emotion/core';

const SecondSection = () => {
    const [state, setstate] = useState([{
        name:"Rain Water Harvesting"
    },
    {
       name:"Ground Water Reacharge"
    },
    {
        name:"Water Efficient Mecahnism"
    },
    {
        name:"Energy Efficient"
    },
    {
        name:"Solar Heated Water"
    },
    {
       name:"Orgainc Waste conversion"
    }
    ]);

    const displayingNames = () => {
        return  state.map((item,i)=> {
            return (
                <div key={i}>
                {item.name}
               </div>
            )
        })
    }
    return (
        <div css={anotherStyle}>
           {displayingNames()} 
        </div>
    );
};

export default SecondSection;


const anotherStyle = css`
    display:grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr;
    div{
        background:blue;
        color:white;
        padding:20px 10px 30px 15px;
        border-right:1px solid white;
    }`;
  