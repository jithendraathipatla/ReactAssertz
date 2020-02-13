import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../GlobalStyles/styles.css';
import FirstSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import SecondSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde3.jpg';
import ThirdSliderImage from '../Imagesa/Images/prestige-finsbury-regent1.jpg';
import FourthSliderImage from '../Imagesa/Images/prestige-finsbury-regent4.jpg';

 
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