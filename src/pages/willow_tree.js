import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import GalleryComponent from '../Components/Gallery';
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

import InteriorOne from '../Imagesa/Images/willo/exterior-one.jpg';
import InteriorTwo from '../Imagesa/Images/willo/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/willo/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/willo/interior-four.jpg'; 


import masterplanabcd from "../Imagesa/Images/willo/master-plan.jpg";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';



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
    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Jindal City",
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
          name: "Balcony View",
          img: InteriorTwo,
        },
        {
          name: "Bed Room",
          img: InteriorThree,
        },
        {
          name: "Kitchen",
          img: InteriorFour,
        },
      ])
    
      const [floor, setfloor] = useState([
        {
          name: "648 SqFt - Hyde",
          img: FloorPlanOne,
        },
        {
          name: "652 SqFt - Hyde",
          img: FloorPlanTwo,
        },
        {
          name: "977 SqFt - Hyde",
          img: FloorPlanThree,
        },
        {
          name: "984 SqFt - Hyde",
          img: FloorPlanFour,
        }
      ]);

      const [lightext, setlightext] = useState([FirstSliderImage, SecondSliderImage, ThirdSliderImage, FourthSliderImage]);
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour]);
      const [lightmas, setlighmas] = useState([masterplanabcd]);
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]);
    
    return (
        <Layout title="prestige willow tree | reviews | Brouchere | Location">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Willow Tree" location="In Vidyanarayapura," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="1, 2," bedroomtwo="3, 3.5" bedroomthree="3.5" price="46"/>
         <br/>
         <OverviewComponent project="Willo Tree Overview" loc="Vidyaranyapura" area="6.73 Acer" units="451" towers="5T" floors="G+10,11 Floors" var="1,2,3 & 3.5 Bhk" poss="mid 2022"/>
         <hr/>
         <ConfigurationComponent project="Willow Tree Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Willow Tree Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
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