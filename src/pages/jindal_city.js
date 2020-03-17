import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Pricingcomponent from '../Components/Pricingcomponent';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import GalleryComponent from '../Components/Gallery';
import FirstSliderImage from '../Imagesa/Images/jindal/exterior-two.jpg';
import SecondSliderImage from '../Imagesa/Images/jindal/exterior-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/jindal/slider-three.jpg';
import FourthSliderImage from '../Imagesa/Images/jindal/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/jindal/logo.jpg';

import InteriorOne from '../Imagesa/Images/Elysian/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/Elysian/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/Elysian/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/Elysian/interior-four.jpg'; 


import masterplanabcd from "../Imagesa/Images/jindal/master-plan.jpg";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';




const Jindal = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "1 BHk",
            feet: 607,
            price: 48
        },
        {
            bed: "2 BHK Compact",
            feet: "962 - 984",
            price: 73
        },
        {
            bed: "2 BHK Regular",
            feet: "1058 - 1111",
            price: 80
        },
        {
            bed: "3 BHK + 2T",
            feet: "1373 - 1425",
            price: 105
        },
        {
            bed: "3 BHK + 3T",
            feet: "1657 - 1719",
            price: 123
        },
        {
            bed: "4 BHK",
            feet: "2075",
            price: 150
        },
        {
            bed: "3 BHK + Maid",
            feet: "1711 - 1855",
            price: 105
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
        },
        {
          name: "1224 SqFt -Regent",
          img: FloorPlanFive,
        },
        {
          name: "1277 SqFt -Regent",
          img: FloorPlanSix,
        },
        {
          name: "1473 SqFt -Regent",
          img: FloorPlanseven,
        },
        {
          name: "1562 SqFt -Regent",
          img: FloorPlanEight,
        },
      ]);

      const [lightext, setlightext] = useState([FirstSliderImage, SecondSliderImage, ThirdSliderImage, FourthSliderImage]);
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour]);
      const [lightmas, setlighmas] = useState([masterplanabcd]);
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour, FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight]);
    
    return (
        <Layout title="prestige jindal city | reviews | Brouchere | Location" project="Prestige Jindal City">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Jindal City" location="In TumKur," attractiveone="Pre_launch Move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1, " bedroomtwo="2, 3" bedroomthree="4" price="48"/>
         <br/>
         <OverviewComponent project="Jindal City Overview" loc="Tumkur" area="32 Acer" units="3571" towers="15T" floors="G+27+28 Floors" var="1,2,3 & 4 Bhk" poss="2021(P1)"/>
         <hr/>
         <ConfigurationComponent project="Jindal City Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Jindal Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Jindal City Amenities" />
         <hr/>
         <Pricingcomponent proj="Jindal City Pricing" project="Prestige Jindal City" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Jindal city Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7246220716765!2d77.48581591413593!3d13.053192516616061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2320ea5d750d%3A0x405b3e113778063b!2sPrestige%20Jindalcity!5e0!3m2!1sen!2sin!4v1583828266207!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Jindal;