import React,{useState} from 'react';
import ConfigurationComponent from '../Components/ConfigurationTabel';
import GalleryComponent from '../Components/Gallery';
import Layout from '../Components/Layout';
import Amenities from '../Components/Amenities';
import Overcomponent from '../Components/StatefulOverview';
import LocationComponent from '../Components/Location';
import SliderComponent from '../Components/Slider';
import FirstSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import SecondSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde3.jpg';
import ThirdSliderImage from '../Imagesa/Images/prestige-finsbury-regent1.jpg';
import FourthSliderImage from '../Imagesa/Images/prestige-finsbury-regent4.jpg';
import ProjectLogo from '../Imagesa/Images/logo.png';
import Pricingcomponent from '../Components/Pricingcomponent';

import InteriorOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import InteriorTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import InteriorThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import InteriorFour from '../Imagesa/Images/Coming-Soon-Project-.jpg'; 


import masterplanabcd from "../Imagesa/Images/Coming-Soon-Project-.jpg";


import FloorPlanOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFour from '../Imagesa/Images/Coming-Soon-Project-.jpg';



const Waterford = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "3 BHk",
            feet: "Coming Soon In",
            price:"Coming Soon In"
        },
        {
            bed: "4 BHK Medium",
            feet: "Coming Soon In",
            price:"Coming Soon In"
        },
        {
            bed: "4 BHK Large",
            feet: "Coming Soon In",
            price: "Coming Soon In"
        },
    ])

    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Waterford",
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
          name: "Coming Soon",
          img: FloorPlanOne,
        },
        {
          name: "Coming Soon",
          img: FloorPlanTwo,
        },
        {
          name: "Coming Soon",
          img: FloorPlanThree,
        },
        {
          name: "Coming Soon",
          img: FloorPlanFour,
        },
      ]);

      const [lightext, setlightext] = useState([FirstSliderImage, SecondSliderImage, ThirdSliderImage, FourthSliderImage]);
      const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour]);
      const [lightmas, setlighmas] = useState([masterplanabcd]);
      const [lightflor, setlightflor] = useState([FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]);
    
    return (
        <Layout title="prestige waterford | ITPL | Brouchere | Location" project="Prestige Waterford" page="waterford">

         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Pre_launch" project="Prestige Waterford" location="In Whitefield," attractiveone="Pre_launch offers" atteractivetwo="Hurry! Book now" bedroomone="" bedroomtwo="3" bedroomthree="4" price="_ _"/>
         <br/>
         <Overcomponent project="Waterford Overview" loc="Whitefield" area="Coming Soon" units="Coming Soon" towers="Coming Soon" floors="Coming Soon" var="Coming Soon" poss="Coming Soon"/>
         <hr/>
         <ConfigurationComponent project="Waterford Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Gallery Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Waterford Amenities"/>
         <hr/>
         <Pricingcomponent proj="Waterford Pricing" project="Prestige Waterford" tabeltwo={squarefeet} page="waterford"/>
         <hr/>
         <LocationComponent title="Waterford Location"  logo={ProjectLogo} iframe="null"/>

        </Layout>
    );
};

export default Waterford;