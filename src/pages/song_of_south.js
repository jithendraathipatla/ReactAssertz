import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Pricingcomponent from '../Components/Pricingcomponent';
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


const Song = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "1 BHk",
            feet: "644",
            price: 39.4
        },
        {
            bed: "2 BHK",
            feet: "1197 - 1241",
            price: 69.8
        },
        {
            bed: "2.5 BHK",
            feet: "1358 - 1376",
            price: 78.5
        },
        {
            bed: "3 BHK Regular",
            feet: "1598 - 1653",
            price: 89.4
        },
        {
            bed: "3 BHK Medium",
            feet: "1728 - 1759",
            price: 96.4
        },
        {
            bed: "3 BHK Large",
            feet: "1923 - 1937",
            price: 109
        },
        {
            bed: "4 BHK",
            feet: "2406 - 2424",
            price: 136
        },
    ])
    return (
        <Layout title="prestige song of south | reviews | Brouchere | Location">        
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Ready to MoveIn" project="Prestige Song of South" location="In Begur Road," attractiveone="Ready_to_move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1,2,3.5 " bedroomtwo="3,3.5" bedroomthree="4" price="39.4"/>
         <br/>
         <OverviewComponent project="Song of South Overview" loc="Begur" area="33 Acer" units="2234" towers="16T" floors="G+15,17,20 Floors" var="1,2,2.5,3.5 & 3 Bhk" poss="mid 2019"/>
         <hr/>
         <ConfigurationComponent project="Song of South Configuration" tabelone={squarefeet}/>
         <hr/>
         <Amenities project="Song of South Amenities"/>
         <hr/>
         <Pricingcomponent project="Song of South Pricing" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent  title="Song of south Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.84081421235!2d77.6136469!3d12.8619848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85622af2679c25d8!2sPrestige%20Song%20of%20the%20South!5e0!3m2!1sen!2sin!4v1583824572461!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Song;