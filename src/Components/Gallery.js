import React,{useState} from 'react';
import {css} from '@emotion/core';
import TitleComponent from '../Components/Title';
import '../GlobalStyles/styles.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';



const Gallery = (props) => {
    return (
        <div css={main}>
            <div style={{textAlign:"center"}}>
            <TitleComponent title={props.project}/>
            <br/>
            <div  className="galleryImages">
              <div  css={central}>
               <Title title="Interior,Exterior, Masterplan & Floorplan"/>
               <TabContainer title1="Exterior View" title2="Interior View" title3="Master Plan" title4="Floor Plan" exterior={<LightHouseabc images={props.ExteriorImages} state={props.Exterior}/>}  mplan={<LightHouseabc images={props.MImagesprop} state={props.Mprop}/>}/>
              </div>
             
            </div>             
            </div>
        </div>
    );
};

export default Gallery;

const main = css`
  margin-bottom:30px;
`
const central = css`
    text-align: center;
    margin: 0px 40px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.07);
`