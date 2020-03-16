import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {css} from '@emotion/core';
import Formonslider from '../Components/HighlightForm';
import Shiningonslider from '../Components/HighlightFormTwo';

 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (props) => {
    return (
        <div style={{marginTop:"55px"}}>
           <div css={partone}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}style={{height:"80vh"}}>
             <div data-src={props.one} alt="First Slider Image"/>
             <div data-src={props.two} alt="Second Slider Image"/>
             <div data-src={props.three} alt="Third Slider Image"/>
             <div data-src={props.four} alt="Fifth Slider Image"/>
            </AutoplaySlider> 
            </div>
            <div css={partwo}>
            <Formonslider projectnmame={props.project}/>
            </div>
            
            <div css={parthree}>
              <Shiningonslider first={props.phase} second={props.project} third={props.location} fourth={props.attractiveone} seventh={props.atteractivetwo} fifth={props.bedroomone} eight={props.bedroomtwo} nine={props.bedroomthree} sixth={props.price}/>
            </div>
        
        </div>
    );
};


const partone = css`
   position: relative;
`

const partwo = css`
   position: absolute;
   top: 21%;
   z-index: 10;
   background: rgba(0,0,0,.81);
   right: 4%;
   @media (max-width:600px){
      display:none;
   }
`

const parthree = css`
   position: absolute;
   top: 19%;
   z-index: 10;
   left:4%;
   background-color: rgba(0,0,0,.7);
   padding:10px;
   border-radius:5px;
   @media (max-width:600px){
      top:7%;
   }
`
export default Slider;