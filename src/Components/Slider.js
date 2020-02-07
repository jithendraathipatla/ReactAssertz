import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../GlobalStyles/styles.css';
import FirstSliderImage from '../Images/slider1.jpg';
import SecondSliderImage from '../Images/slider2.jpg';
import ThirdSliderImage from '../Images/slider3.jpg';
import FourthSliderImage from '../Images/slider4.jpg';
import FifthSliderImage from '../Images/slider5.jpg';

 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div style={{marginTop:"70px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}style={{height:"80vh"}}>
             <div data-src={FirstSliderImage} alt="First Slider Image"/>
             <div data-src={SecondSliderImage} alt="Second Slider Image"/>
             <div data-src={ThirdSliderImage} alt="Third Slider Image"/>
             <div data-src={FourthSliderImage} alt="Fifth Slider Image"/>
             <div data-src={FifthSliderImage} alt="Slider Image"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;