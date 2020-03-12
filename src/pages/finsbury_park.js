import React,{useState} from 'react';
import Layout from '../Components/Layout';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import SecondSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde3.jpg';
import ThirdSliderImage from '../Imagesa/Images/prestige-finsbury-regent1.jpg';
import FourthSliderImage from '../Imagesa/Images/prestige-finsbury-regent4.jpg';
import ProjectLogo from '../Imagesa/Images/finsbury.svg';


const Finsbury = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "1 BHk -  Hyde",
            feet: "636 - 652",
            price: 33.5
        },
        {
            bed: "2 BHK - Hyde",
            feet: "955 - 999",
            price: 50.6
        },
        {
            bed: "3 BHK + 2T - Regent",
            feet: "1244 - 1277",
            price: 63
        },
        {
            bed: "3 BHK + 3T - Regent",
            feet: "1431 - 1562",
            price: 73
        },
    ])
    return (
        <Layout title="prestige finsbury park | reviews | Brouchere | Location">        
         <SliderComponent  one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="PRESTIGE FINSBURY PARK" location="In Bagular," attractiveone="Hurry! Only 1% GST" atteractivetwo="PMAY benefits" bedroomone="1, " bedroomtwo="2" bedroomthree="3" price="33.5"/>
         <br/>
         <OverviewComponent project="Finsbury Park Overview"/>
         <hr/>
         <ConfigurationComponent project="Finsbury park Configuration" tabelone={squarefeet}/>
         <hr/>
         <Amenities project="Finsbury Park Amenities"/>
         <hr/>
         <LocationComponent title="Finsbury Park Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15540.99810165567!2d77.66788112783367!3d13.14665435185809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b7d5e8061c3%3A0xd0be65d7c84b08a7!2sPrestige%20Finsbury%20Park!5e0!3m2!1sen!2sin!4v1583828086918!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Finsbury;