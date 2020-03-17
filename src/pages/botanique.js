import React, {useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import GalleryComponent from '../Components/Gallery';
import Pricingcomponent from '../Components/Pricingcomponent';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import '../GlobalStyles/styles.css';
import FirstSliderImage from '../Imagesa/Images/botanique/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/botanique/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/botanique/slider-one.jpg';
import FourthSliderImage from '../Imagesa/Images/botanique/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/botanique/logo.jpg';


import InteriorOne from '../Imagesa/Images/botanique/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/botanique/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/botanique/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/latestPeace.jpg'; 


import masterplanabcd from "../Imagesa/Images/botanique/master-plan.png";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';


const Botanique = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "2 BHk",
            feet: 1473,
            price: 184
        },
        {
            bed: "3 BHK",
            feet: 1751,
            price: 218
        },
        {
            bed: "3 BHK",
            feet: 1873,
            price: 236
        },
        {
            bed: "3 BHK",
            feet: 1932,
            price: 244
        },
        {
            bed: "3 BHK",
            feet: 1942,
            price: 245
        },
        {
            bed: "3 BHK",
            feet: 2311,
            price: 288
        },
        {
            bed: "3 BHK",
            feet: 2473,
            price: 291
        },
    ])

    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Botanique",
        },
      ])
    
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
          name: "Bed Room",
          img: InteriorOne,
        },
        {
          name: "Dining Hall",
          img: InteriorTwo,
        },
        {
          name: "Hall",
          img: InteriorThree,
        },
        {
          name: "Balcony View",
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

      const [lightext, setlightext] = useState([FirstSliderImage, SecondSliderImage, ThirdSliderImage,FourthSliderImage,]);
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour])
      const [lightmas, setlighmas] = useState([masterplanabcd])
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour, FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight])    
        return (
        <Layout title="prestige Botanique| Brouchere | Location" project="Prestige Botanique">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Botanique" location="In RV Road," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="2" bedroomthree="3" price="184"/>
         <br/>
         <OverviewComponent project="Botanique Overview" loc="RV Road" area="0.6 Acer" units="34" towers="1T" floors="2B+G+8 Floors" var="2&3 Bhk" poss="2021"/>
         <hr/>
         <ConfigurationComponent project="Botanique Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Botanique Gallery"  Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Botanique Amenities"/>
         <hr/>
         <Pricingcomponent proj="Botanique Pricing" project="Prestige Botanique" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Botanique Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2735931848188!2d77.57796491413502!3d12.95433691876352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e8bb736e65%3A0xb451cc1a6240f293!2sPrestige%20Botanique!5e0!3m2!1sen!2sin!4v1583827427402!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Botanique;