import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/willo/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/willo/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/willo/slider-three.jpg';
import FourthSliderImage from '../Imagesa/Images/willo/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/willo/logo.jpg';
import Pricingcomponent from '../Components/Pricingcomponent';


const Willo = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "1 BHk",
            feet: "661 - 664",
            price: 46
        },
        {
            bed: "2 BHK",
            feet: "1154",
            price: 85
        },
        {
            bed: "3 BHK",
            feet: "1364 - 1596",
            price: 100
        },
        {
            bed: "3 BHK + Maid",
            feet: "1812 - 1830",
            price: 135
        },
    ])
    return (
        <Layout title="prestige willow tree | reviews | Brouchere | Location">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Willow Tree" location="In Vidyanarayapura," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="1, 2," bedroomtwo="3, 3.5" bedroomthree="3.5" price="46"/>
         <br/>
         <OverviewComponent project="Willo Tree Overview"/>
         <hr/>
         <ConfigurationComponent project="Willow Tree Configuration" tabelone={squarefeet}/>
         <hr/>
         <Amenities project="Willow Tree Amenities"/>
         <hr/>
         <Pricingcomponent project="Willow Tree Pricing" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Willo Tree Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.357265704769!2d77.55748681413623!3d13.076529516106874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae23552102b273%3A0xcf4c849a7275b34b!2sPrestige%20Willow%20Tree!5e0!3m2!1sen!2sin!4v1583828717972!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Willo;