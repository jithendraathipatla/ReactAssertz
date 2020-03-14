import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Pricingcomponent from '../Components/Pricingcomponent';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/Kew/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/Kew/slider-twojpg.jpg';
import ThirdSliderImage from '../Imagesa/Images/Kew/slider-three.jpg';
import FourthSliderImage from '../Imagesa/Images/Kew/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/lakeridge/logo.jpg';



const Lake = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "1 BHk",
            feet: "661",
            price:40
        },
        {
            bed: "2 BHK",
            feet: "1137 - 1159",
            price: 70
        },
        {
            bed: "2.5 BHK",
            feet: "1345 - 1367",
            price: 82
        },
        {
            bed: "3 BHK",
            feet: "1571",
            price: 98
        },
        {
            bed: "3 BHK + Maid",
            feet: "1745 - 1750",
            price: 105
        },
    ])
    return (
        <Layout title="prestige lake ridge | reviews | Brouchere | Location">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Ready to Move_In" project="Prestige Lake Ridge" location="In Subramanyapura," attractiveone="Ready to Move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1, " bedroomtwo="2" bedroomthree="3" price="40"/>
         <br/>
         <OverviewComponent project="Lake Ridge Overview"/>
         <hr/>
         <ConfigurationComponent project="Lake Ridge Configuration" tabelone={squarefeet}/>
         <hr/>
         <Amenities project="Lake Ridge Amenities"/>
         <hr/>
         <Pricingcomponent project="Lake Ridge Pricing" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Lake Ridge Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.171742611922!2d77.54183352164858!3d12.902199671598392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0eee48361b%3A0x3c40e528e94bdec8!2sPrestige%20Lake%20Ridge!5e0!3m2!1sen!2sin!4v1583828452900!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Lake;