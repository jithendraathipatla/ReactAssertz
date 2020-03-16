import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Pricingcomponent from '../Components/Pricingcomponent';
import GalleryComponent from '../Components/Gallery';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/Elysian/first.jpg';
import SecondSliderImage from '../Imagesa/Images/Elysian/second-slider.jpg';
import ThirdSliderImage from '../Imagesa/Images/Elysian/third-slider.jpg';
import FourthSliderImage from '../Imagesa/Images/Elysian/first.jpg';
import ProjectLogo from '../Imagesa/Images/Elysian/logo.jpg';




const Elysian = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "2 BHk",
            feet: "1109",
            price: 86
        },
        {
            bed: "3 BHK",
            feet: "1342",
            price: 104
        },
        {
            bed: "3 BHK",
            feet: "1617",
            price: 125
        },
        {
            bed: "3 BHK",
            feet: "1810",
            price: 140
        },
    ])
    return (
        <Layout title="prestige elysian | reviews | Brouchere | Location">
         <SliderComponent  one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Elysian" location="In Bannerghatta," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="2" bedroomthree="3" price="86"/>
         <OverviewComponent project="Elysian Overview" loc="Bannerghatta" area="6.37 Acer" units="548" towers="2T" floors="G+16+18 Floors" var="2&3 Bhk" poss="2022"/>
         <hr/>
         <ConfigurationComponent project="Elysian Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Elysian Gallery"/>
         <hr/>
         <Amenities project="Elysian Amenities"/>
         <hr/>
         <Pricingcomponent project="Elysian Pricing" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Elysian Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.53596909848!2d77.59184831413425!3d12.87322012051415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15255b79d7ad%3A0x1fdc3f6d55183b1!2sPrestige%20Elysian!5e0!3m2!1sen!2sin!4v1583827860303!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Elysian;