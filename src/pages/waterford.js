import React from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import Overcomponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import SecondSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde3.jpg';
import ThirdSliderImage from '../Imagesa/Images/prestige-finsbury-regent1.jpg';
import FourthSliderImage from '../Imagesa/Images/prestige-finsbury-regent4.jpg';
import ProjectLogo from '../Imagesa/Images/logo.png';

const waterford = () => {
    return (
        <Layout title="prestige waterford | ITPL | Brouchere | Location">
          <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage}/>
          <br/>
         <Overcomponent project="Waterford Overview"/>
         <hr/>
         <Amenities project="Waterford Amenities"/>
         <hr/>
         <LocationComponent title="Waterford Location"  logo={ProjectLogo} iframe="null"/>

        </Layout>
    );
};

export default waterford;