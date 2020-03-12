import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/songofsouth/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/songofsouth/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/songofsouth/slider-three.jpg';
import FourthSliderImage from '../Imagesa/Images/songofsouth/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/songofsouth/logo.jpg';


const amenities = () => {
    return (
        <Layout title="prestige song of south | reviews | Brouchere | Location">        
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Ready to MoveIn" project="Prestige Song of South" location="In Begur Road," attractiveone="Ready_to_move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1,2,3.5 " bedroomtwo="3,3.5" bedroomthree="4" price="39.4"/>
         <br/>
         <OverviewComponent project="Song of South Overview"/>
         <hr/>
         <Amenities project="Song of South Amenities"/>
         <hr/>
         <LocationComponent  title="Song of south Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.84081421235!2d77.6136469!3d12.8619848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85622af2679c25d8!2sPrestige%20Song%20of%20the%20South!5e0!3m2!1sen!2sin!4v1583824572461!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default amenities;