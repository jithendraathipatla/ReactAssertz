import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../GlobalStyles/styles.css';
import FirstSliderImage from '../Imagesa/Images/sliderone.jpg';
import SecondSliderImage from '../Imagesa/Images/secondSlider.jpeg';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div style={{marginTop:"22px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}>
             <div data-src={FirstSliderImage} alt="First Slider Image"/>
             <div data-src={SecondSliderImage} alt="Second Slider Image"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;