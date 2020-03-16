import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import GalleryComponent from '../Components/Gallery';
import Pricingcomponent from '../Components/Pricingcomponent';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/parksquare/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/parksquare/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/parksquare/slider-three.jpg';
import FourthSliderImage from '../Imagesa/Images/parksquare/slider-four.jpg';
import ProjectLogo from '../Imagesa/Images/parksquare/logo.jpg';


import InteriorOne from '../Imagesa/Images/parksquare/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/parksquare/interior-two.jpg';



import masterplanabcd from "../Imagesa/Images/parksquare/master-plan.jpg";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';




const Park = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "2 BHk",
            feet: 1115 - 1130,
            price: 80
        },
        {
            bed: "3 BHK + 2T",
            feet: 1348 - 1385,
            price: 97
        },
        {
            bed: "3 BHK + 3T",
            feet: 1596 - 1600,
            price: 114
        },
        {
            bed: "3 BHK + Maid",
            feet: 1711 - 1855,
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
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo]);
      const [lightmas, setlighmas] = useState([masterplanabcd]);
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour, FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight]);
    
    return (
        <Layout title="park Square | reviews | Brouchere | Location">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Park Square" location="In Bannerghatta," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="2" bedroomthree="3" price="80"/>
         <br/>
         <OverviewComponent project="Park Square Overview" loc="Bannerghatta" area="8 Acer" units="586" towers="3T" floors="3B+G+27 Floors" var="2&3 Bhk" poss="2021"/>
         <hr/>
         <ConfigurationComponent project="Park Square Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Park Square Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Park Square Amenities"/>
         <hr/>
         <Pricingcomponent project="Park Square Pricing" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Park Square Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62245.60076796316!2d77.56938517993613!3d12.820642077307527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ba11325c2d1%3A0xbe2b7d341fc1e035!2sPrestige%20Park%20Square!5e0!3m2!1sen!2sin!4v1583828552726!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Park;