import React, {useState} from 'react';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import OverviewComponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import GalleryComponent from '../Components/Gallery';
import SliderComponent from '../Components/Slider';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import Pricingcomponent from '../Components/Pricingcomponent';
import FirstSliderImage from '../Imagesa/Images/dolcevita/slider-one.jpg';
import SecondSliderImage from '../Imagesa/Images/dolcevita/slider-two.jpg';
import ThirdSliderImage from '../Imagesa/Images/dolcevita/slider-one.jpg';
import FourthSliderImage from '../Imagesa/Images/dolcevita/slider-two.jpg';
import ProjectLogo from '../Imagesa/Images/dolcevita/logo.jpg';


import InteriorOne from '../Imagesa/Images/botanique/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/botanique/interior-two.jpg';
import InteriorThree from '../Imagesa/Images/botanique/interior-three.jpg';
import InteriorFour from '../Imagesa/Images/latestPeace.jpg'; 


import masterplanabcd from "../Imagesa/Images/dolcevita/master-plan.jpg";



import FloorPlanOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFour from '../Imagesa/Images/Coming-Soon-Project-.jpg';


const Dolce = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "2 BHk",
            feet: "1267",
            price: 94
        },
        {
            bed: "2 BHK",
            feet: "1274",
            price: 94
        },
        {
            bed: "3 BHK",
            feet: "1718",
            price: 128
        },
        {
            bed: "3 BHK",
            feet: "1758",
            price: 129
        },
        {
            bed: "3 BHK Large",
            feet: "1911",
            price: 141
        },
        {
            bed: "3 BHK Large",
            feet: "1924",
            price: 142
        },
    ])

    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Dolce Vita",
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
          name: "1274 SqFt - 2 BHK",
          img: FloorPlanOne,
        },
        {
          name: "1718 SqFt - 3 BHK M",
          img: FloorPlanTwo,
        },
        {
          name: "1911 SqFt - 3 BHK L",
          img: FloorPlanThree,
        },
        {
          name: "1924 SqFt - 3 BHK XL",
          img: FloorPlanFour,
        },
        
      ]);

      const [lightext, setlightext] = useState([FirstSliderImage, SecondSliderImage, ThirdSliderImage,FourthSliderImage,]);
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour])
      const [lightmas, setlighmas] = useState([masterplanabcd])
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour])
       
      
      return (
        <Layout title="prestige dolce vita | reviews | Location" project="Prestige Dolce Vita" page="dolce_vita">
          <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Dolce Vita" location="In Whitefield," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="2" bedroomthree="3" price="94"/>
          <br/>
         <OverviewComponent project="Dolce Vita Overview" loc="Whitefield" area="1.36 Acer" units="66" towers="2T" floors="G+7+8 Floors" var="2&3 Bhk" poss="2021"/>
         <hr/>
         <ConfigurationComponent project="Dolce Vita Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Dolce Vita Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>

         <Amenities project="Dolce Vita Amenities"/>
         <hr/>
         <Pricingcomponent proj="Dolce Vita Pricing" project="Prestige Dolce Vita" tabeltwo={squarefeet} page="dolce_vita"/>
         <hr/>
         <LocationComponent title="Dolce Vita Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.96872735442!2d77.7402523141352!3d12.973852018340834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae115b9966adff%3A0xbbc8e762a3036b41!2sPrestige%20Dolce%20Vita!5e0!3m2!1sen!2sin!4v1583827758989!5m2!1sen!2sin" />
        </Layout>
    );
};

export default Dolce;