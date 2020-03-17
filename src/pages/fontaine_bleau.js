import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import GalleryComponent from '../Components/Gallery';
import Pricingcomponent from '../Components/Pricingcomponent';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/fontainebleau/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/fontainebleau/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/fontainebleau/slider-three.jpg';
import FourthSliderImage from '../Imagesa/Images/fontainebleau/slider-two.jpg';
import ProjectLogo from '../Imagesa/Images/fontainebleau/logo.jpg';



import InteriorOne from '../Imagesa/Images/Elysian/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/Elysian/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/Elysian/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/Elysian/interior-four.jpg'; 


import masterplanabcd from "../Imagesa/Images/fontainebleau/master-plan.jpeg";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';


const Fontaine_bleau = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "2 BHk",
            feet: "1132",
            price: 83
        },
        {
            bed: "3 BHK Small",
            feet: "1356",
            price: 100
        },
        {
            bed: "3 BHK",
            feet: "1575",
            price: 116
        },
        {
            bed: "3 BHK",
            feet: "1603",
            price: 118
        },
    ]);
    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Fontaine Bleau",
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
        <Layout title="prestige fontaine bleau | reviews | Brouchere | Location" project="Prestige Fontaine Bleau">
         <SliderComponent  one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Fontaine Bleau" location="In Whitefield," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="2" bedroomthree="3" price="83"/>
         <br/>
         <OverviewComponent project="Fontaine Bleau Overview" loc="Whitefield" area="1.05 Acer" units="60" towers="2T" floors="G+10 Floors" var="2&3 Bhk" poss="2021"/>
         <hr/>
         <ConfigurationComponent project="Fontaine Bleau Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Fontaine Bleau Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Fontaine Bleau Amenities"/>
         <hr/>
         <Pricingcomponent proj="Fontaine Bleau Pricing" project="Prestige Fontaine Bleau" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Fontaine Bleau Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.949070287174!2d77.74051741413528!3d12.975109318313503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ff99828ba3%3A0xc975735a9e91bfbe!2sPRESTIGE%20FONTAINE%20BLEAU!5e0!3m2!1sen!2sin!4v1583828183205!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Fontaine_bleau;