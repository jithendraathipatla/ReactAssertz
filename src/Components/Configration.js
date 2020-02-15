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
              <span>2 BHK 2T - 1141 SQ FT</span>
              <span> Rs. 84.57 L</span>
              <span> Rs. 79.18 L</span>
             </div>
             <div>
             <span>2 BHK 2T - 1141 SQ FT</span>
             <span> Rs. 84.57 L</span>
             <span> Rs. 79.18 L</span>
            </div>
            <div>
            <span>2 BHK 2T - 1141 SQ FT</span>
            <span> Rs. 84.57 L</span>
            <span> Rs. 79.18 L</span>
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
    border-bottom:0.02px solid #eee;
    width: 880px;
    padding:20px;
    margin-left: 17%;
    span{
      padding:30px;
    }
  }
`;