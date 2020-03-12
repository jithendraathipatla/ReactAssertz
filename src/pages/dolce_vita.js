import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/dolcevita/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/dolcevita/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/dolcevita/slider-one.jpg';
import FourthSliderImage from '../Imagesa/Images/dolcevita/slider-two.jpg';
import ProjectLogo from '../Imagesa/Images/dolcevita/logo.jpg';



const Dolce = () => {
    return (
        <Layout title="prestige dolce vita | reviews | Location">
          <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Dolce Vita" location="In Whitefield," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="2" bedroomthree="3" price="94"/>
          <br/>
         <OverviewComponent project="Dolce Vita Overview"/>
         <hr/>
         <Amenities project="Dolce Vita Amenities"/>
         <hr/>
         <LocationComponent title="Dolce Vita Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.96872735442!2d77.7402523141352!3d12.973852018340834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115b9966adff%3A0xbbc8e762a3036b41!2sPrestige%20Dolce%20Vita!5e0!3m2!1sen!2sin!4v1583827758989!5m2!1sen!2sin" />

        </Layout>
    );
};

export default Dolce;