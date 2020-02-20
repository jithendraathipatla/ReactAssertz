import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from './Modal';
import Prelaunch from '../Imagesa/Images/prelaunch.png';
import {css} from '@emotion/core'
import '../GlobalStyles/styles.css';

const Tabel = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Aspire Aurum Configuration"/>
            </div>
            <div style={{textAlign:"center"}}>
            <div css={tabel}>
            <img src={Prelaunch} alt="prelaunch Image"/>
             <div>
              <span><h1>1 BHK -</h1> <h2> 505 SQ FT</h2></span>
              <span> <h3>Rs. 25 LAKH</h3></span>
              <span> <h4>Rs. 22.5 LAKH</h4></span>
              <span><Modal title="Click Here" class="modalbuttonsmall"/></span>
             </div>
             <div>
             <span><h1>2 BHK -</h1>  <h2> 955 SQ FT</h2></span>
             <span><h3> Rs. 35 LAKH</h3></span>
               <span><h4> Rs. 32.5 LAKH</h4></span>
               <span><Modal title="Click Here" class="modalbuttonsmall"/></span>
            </div>
           
            </div>
            </div>
        </div>
    );
};

export default Tabel;

const tabel = css`
  background:black;
  color:#fff;
  margin:0px 50vh;
  img{
    border:2px solid black;
  }
  div{
    width: 900px;
    display:flex;
    span{
      padding: 10px 42px 10px 28px; 
      border-bottom:0.02px solid #eee;
      border-right:0.04px solid #eee;
      display:flex;
      :nth-child(4){
        width:120px;
        display:block;
        border-bottom:0.02px solid #eee;
        border-right:none;
        margin-top:3px;
      }
      h1{
        font-weight:bold;
        font-size:1.5em;
      }
      h3{
        text-decoration: line-through;
        font-size:1.1em;
        margin-top:6px;
        text-decoration-color:orange;
      }
      h2{
        font-weight:450;
        font-size:1.2em;
        margin-top:5px;
       
      }
      h4{
        font-weight:480;
        font-size:1.3em;
        margin-top:4px;
       
      }
    }
  }
  @media(max-width: 600px) {
    margin:0px 0px;
    div{
      display:block;
      width:auto;
    }
    span{
      :nth-child(4){
        display:flex;
      }
    }
  }
`;

const second = css`
display:flex;
`