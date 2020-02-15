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
              <span> <h3>Rs. 84.57 L</h3></span>
              <span> <h4>Rs. 79.18 L</h4></span>
             </div>
             <div>
             <span><h1>2 BHK 2T -</h1>  <h2>1141 SQ FT</h2></span>
             <span><h3> Rs. 84.57 L</h3></span>
               <span><h4> Rs. 84.57 L</h4></span>
            </div>
            <div>
            <span><h1>2 BHK 2T -</h1> <h2>1141 SQ FT</h2></span>
            <span><h3> Rs. 84.57 L</h3></span>
              <span><h4> Rs. 84.57 L</h4></span>
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
    width: 900px;
    margin-left: 18%;
    display:flex;
    span{
      padding: 20px 85px 0px 67px;
      border-bottom:0.02px solid #eee;
      display:flex;
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
`;