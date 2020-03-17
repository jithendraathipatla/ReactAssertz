import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Pricingcomponent from '../Components/Pricingcomponent';
import GalleryComponent from '../Components/Gallery';
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


import InteriorOne from '../Imagesa/Images/Elysian/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/Elysian/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/Elysian/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/Elysian/interior-four.jpg'; 


import masterplanabcd from "../Imagesa/Images/songofsouth/master-plan.jpg";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';



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

    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Song of South",
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
        <Layout title="prestige song of south | reviews | Brouchere | Location" project="Prestige Song of South">        
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Ready to Move_In" project="Prestige Song of South" location="In Begur Road," attractiveone="Ready_to_move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1,2,3.5 " bedroomtwo="3,3.5" bedroomthree="4" price="39.4"/>
         <br/>
         <OverviewComponent project="Song of South Overview" loc="Begur" area="33 Acer" units="2234" towers="16T" floors="G+15,17,20 Floors" var="1,2,2.5,3.5 & 3 Bhk" poss="mid 2019"/>
         <hr/>
         <ConfigurationComponent project="Song of South Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Song of South Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Song of South Amenities"/>
         <hr/>
         <Pricingcomponent proj="Song of South Pricing" project="Prestige Song of South" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent  title="Song of south Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.84081421235!2d77.6136469!3d12.8619848!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85622af2679c25d8!2sPrestige%20Song%20of%20the%20South!5e0!3m2!1sen!2sin!4v1583824572461!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Song;