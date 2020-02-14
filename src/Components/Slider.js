import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../GlobalStyles/styles.css';
import FirstSliderImage from '../Imagesa/Images/sliderone.jpg';
import SecondSliderImage from '../Imagesa/Images/slidertwo.jpg';
import ThirdSliderImage from '../Imagesa/Images/sliderthree.jpg';
import FourthSliderImage from '../Imagesa/Images/sliderfour.jpg';

 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div style={{marginTop:"50px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}style={{height:"80vh"}}>
             <div data-src={FirstSliderImage} alt="First Slider Image"/>
             <div data-src={SecondSliderImage} alt="Second Slider Image"/>
             <div data-src={ThirdSliderImage} alt="Third Slider Image"/>
             <div data-src={FourthSliderImage} alt="Fifth Slider Image"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;