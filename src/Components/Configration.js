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
            <TitleComponent title="Sun And Sanctum Configuration"/>
            </div>
            <div style={{textAlign:"center"}}>
            <div css={tabel}>
            <img src={Prelaunch}/>
             <div>
              <span><h1>2 BHK 2T -</h1> <h2>1141 SQ FT</h2></span>
              <span> <h2>Rs. 84.57 L</h2></span>
              <span> <h2>Rs. 79.18 L</h2></span>
             </div>
             <div>
             <span><h1>2 BHK 2T -</h1>  <h2>1141 SQ FT</h2></span>
             <span><h2> Rs. 84.57 L</h2></span>
               <span><h2> Rs. 84.57 L</h2></span>
            </div>
            <div>
            <span><h1>2 BHK 2T -</h1> <h2>1141 SQ FT</h2></span>
            <span><h2> Rs. 84.57 L</h2></span>
              <span><h2> Rs. 84.57 L</h2></span>
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
  padding:20px 0px;
  img{
    border:2px solid black;
  }
  div{
    width: 880px;
    margin-left: 17%;
    display:flex;
    span{
      padding:20px 70px;
      border-bottom:0.02px solid #eee;
      display:flex;
      h1{
        font-weight:bold;
        font-size:1.5em;
      }
      h2{
        font-weight:450;
        font-size:1.2em;
        margin-top:5px;
        margin-left:4px;
      }
    }
  }
`;