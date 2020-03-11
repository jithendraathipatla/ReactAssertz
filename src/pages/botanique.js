import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import '../GlobalStyles/styles.css';
import FirstSliderImage from '../Imagesa/Images/botanique/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/botanique/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/botanique/slider-one.jpg';
import FourthSliderImage from '../Imagesa/Images/botanique/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/botanique/logo.jpg';


const Botanique = () => {
    return (
        <Layout title="prestige Botanique| Brouchere | Location">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage}/>
         <br/>
         <OverviewComponent project="Botanique Overview"/>
         <hr/>
         <Amenities project="Botanique Amenities"/>
         <hr/>
         <LocationComponent title="Botanique Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2735931848188!2d77.57796491413502!3d12.95433691876352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e8bb736e65%3A0xb451cc1a6240f293!2sPrestige%20Botanique!5e0!3m2!1sen!2sin!4v1583827427402!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Botanique;