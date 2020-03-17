import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import GalleryComponent from '../Components/Gallery';
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

import InteriorOne from '../Imagesa/Images/Elysian/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/Elysian/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/Elysian/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/Elysian/interior-four.jpg'; 


import masterplanabcd from "../Imagesa/Images/lakeridge/master-plan.jpg";


import FloorPlanOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFour from '../Imagesa/Images/Coming-Soon-Project-.jpg';


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

    
    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Lake Ridge",
        },
    ]);

    const [exterior, setexterior] = useState([
        {
          img: FirstSliderImage,
          name: "Exterior View",
        },
        {
          img: SecondSliderImage,
          name: "Exterior View",
        },
        {
          img: ThirdSliderImage,
          name: "Exterior View",
        },
        {
          img: FourthSliderImage,
          name: "Exterior View",
        },
      ])
    
      const [interior, setinterior] = useState([
        {
          name: "Hall",
          img: InteriorOne,
        },
        {
          name: "Bed Room",
          img: InteriorTwo,
        },
        {
          name: "Kitchen",
          img: InteriorThree,
        },
        {
          name: "Main Hall",
          img: InteriorFour,
        },
      ])
    
      const [floor, setfloor] = useState([
        {
          name: "661 SqFt - 1 BHk",
          img: FloorPlanOne,
        },
        {
          name: "1137 SqFt - 2 BHK",
          img: FloorPlanTwo,
        },
        {
          name: "1571 SqFt - 3 BHK",
          img: FloorPlanThree,
        },
        {
          name: "1745 SqFt - 3 BHK + Maid",
          img: FloorPlanFour,
        },
        
      ]);

      

      const [lightext, setlightext] = useState([FirstSliderImage, SecondSliderImage, ThirdSliderImage, FourthSliderImage]);
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour]);
      const [lightmas, setlighmas] = useState([masterplanabcd]);
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]);
    
    return (
        <Layout title="prestige lake ridge | reviews | Brouchere | Location" project="Prestige Lake Ridge" page="lake_ridge">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Ready to Move_In" project="Prestige Lake Ridge" location="In Subramanyapura," attractiveone="Ready to Move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1, " bedroomtwo="2" bedroomthree="3" price="40"/>
         <br/>
         <OverviewComponent project="Lake Ridge Overview" loc="Subramanyapura" area="15.96 Acer" units="1119" towers="12T" floors="G+18 Floors" var="1,2 & 3 Bhk" poss="2019"/>
         <hr/>
         <ConfigurationComponent project="Lake Ridge Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Lake Ridge Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Lake Ridge Amenities"/>
         <hr/>
         <Pricingcomponent proj="Lake Ridge Pricing" project="Prestige Lake Ridge" tabeltwo={squarefeet} page="lake_ridge"/>
         <hr/>
         <LocationComponent title="Lake Ridge Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.171742611922!2d77.54183352164858!3d12.902199671598392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f0eee48361b%3A0x3c40e528e94bdec8!2sPrestige%20Lake%20Ridge!5e0!3m2!1sen!2sin!4v1583828452900!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Lake;