import React from 'react';
import image from '../Imagesa/Images/sliderone.jpg';
import Title from '../Components/Title';
import {css} from '@emotion/core';

const ThirdSection = () => {
    return (
        <div css={style}>
            <div>
            <Title title="Why Aspire Aurum?"/>
            <br/>
              <div css={styletwo}>
                <div>
                 <ul>
                   <li>Carbon-Healing Homes</li>
                   <li>68% Open Space</li>
                   <li>Smart Homes</li>
                   <li>Water Efficient Mechanism</li>
                 </ul>
                </div>
                <div>
                <ul>
                <li>Solar Treated water</li>
                <li>Efficient Waste Management</li>
                <li>Water Conservation</li>
                <li>Kids Playing Areas</li>
              </ul>
                
                </div>
              </div>
            </div>
            <div>
             <img src={image} alt="Aspire Aurum"/>
            </div>
        </div>
    );
};

export default ThirdSection;

const style = css`
  display:flex;
  
  div{
      flex:7;
      text-align:center;
  }
  img{
      width:500px;
      flex:5;
      padding:2em 1em;
  }
  @media(max-width: 600px) {
    display:block;
  }
`;

const styletwo = css`
  display:flex;
  padding-left:10em;
  li{
      text-align:justify;
      list-style:disc;
      margin-bottom:12px;
  }
  @media(max-width: 600px) {
    display:block;
    padding-left:7em;
  }
`;