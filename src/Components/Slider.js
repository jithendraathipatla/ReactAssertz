import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = (props) => {
    return (
        <div style={{marginTop:"50px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}style={{height:"80vh"}}>
             <div data-src={props.one} alt="First Slider Image"/>
             <div data-src={props.two} alt="Second Slider Image"/>
             <div data-src={props.three} alt="Third Slider Image"/>
             <div data-src={props.four} alt="Fifth Slider Image"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;