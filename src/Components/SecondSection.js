import React,{useState} from 'react';
import { jsx, css } from '@emotion/core';
import { FaRegDotCircle, FaMendeley, FaTree, FaRegBuilding } from 'react-icons/fa';


const SecondSection = () => {
    const [state, setstate] = useState([{
        name:"80%",
        subName:"Open Space",
        icon:<FaRegDotCircle/>
    },
    {
       name:"25+",
       subName:"Amenities",
       icon:<FaMendeley/>
    },
    {
        name:"6",
        subName:"Acere of Centrl Park",
        icon:<FaTree/>
    },
    {
        name:"1",
        subName:"In Campus ATM/Bank",
        icon:<FaRegBuilding/>
    },
    ]);

    const displayingNames = () => {
        return  state.map((item,i)=> {
            return (
                <div key={i}>
                <div css={saperateStyle}>
                <h1>{item.icon} {item.name}</h1>
                <h2>{item.subName}</h2>
                </div>
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
    grid-template-columns: 2.5fr 2.5fr 2.5fr 2.5fr;
        background:#19544b;
        border-top:0.1px solid white;
        color:white;
        padding:10px 0px 20px 18vh;
        text-align:left;
    @media(max-width: 600px) {
        grid-template-columns: 2fr 2fr;
    }`;

const saperateStyle = css`
   display:block;
   h1{
       margin-left:3px;
       font-size:45px;
       color:#fff;
       font-weight:bold;
    }
    svg{
        flex:3;
        color:#4caf50;
        font-size:35px;
    }
    h2{
        color:#000;
        font-size:22px;
        margin-top:0.1em;
    }
   

`;
  
  