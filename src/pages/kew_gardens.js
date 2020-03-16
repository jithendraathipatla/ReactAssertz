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
import ProjectLogo from '../Imagesa/Images/Kew/logo.jpg';


import InteriorOne from '../Imagesa/Images/Kew/interior-one.jpg';
import InteriorTwo from '../Imagesa/Images/Kew/interior-two.jpg';



import masterplanabcd from "../Imagesa/Images/Kew/master-plan.jpg";


import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor7.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';




const Key = () => {
    const [squarefeet, setsquarefeet] = useState([
        {
            bed: "1 BHk",
            feet: "615 - 634",
            price: 86
        },
        {
            bed: "2 BHK",
            feet: "1146 - 1185",
            price: 94
        },
        {
            bed: "2 BHK + Study",
            feet: "1291 - 1360",
            price: 110
        },
        {
            bed: "3 BHK",
            feet: "1067",
            price: 119
        },
    ]);
    const [masterplan, setmasterplan] = useState([
        {
          img: masterplanabcd,
          name: "Kew Gardens",
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
          name: "Bed Room",
          img: InteriorOne,
        },
        {
          name: "Hall",
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
        <Layout title="prestige kew gardens | reviews | Brouchere | Location">
         <SliderComponent one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Ready to Move_In" project="Prestige Kew Gardens" location="In Yelamur," attractiveone="Ready to Move_In offers" atteractivetwo="Hurry! Book now" bedroomone="1, " bedroomtwo="2" bedroomthree="3" price="86"/>
         <br/>
         <OverviewComponent project="Kew Gardens Overview" loc="Yelamur" area="15.74 Acer" units="979" towers="16T" floors="G+4 Floors" var="1,2&3 Bhk" poss="2019"/>
         <hr/>
         <ConfigurationComponent project="Kew Gardens Configuration" tabelone={squarefeet}/>
         <hr/>
         <GalleryComponent project="Key Gardens Gallery" Exterior={exterior} ExteriorImages={lightext} Interior={interior} InteriorImages={lighint} Mprop={masterplan} MImagesprop={lightmas} Fprop={floor} FImageprop={lightflor}/>
         <hr/>
         <Amenities project="Kew Gardens Amenities"/>
         <hr/>
         <Pricingcomponent project="Kew Gardens Pricing" tabeltwo={squarefeet}/>
         <hr/>
         <LocationComponent title="Kew Gardens Location" logo={ProjectLogo} iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.369887370166!2d77.67875251413496!3d12.94816691889703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13bf5d0f0ab1%3A0x472b15a1a017efa7!2sPrestige%20Kew%20Gardens%2C%20Kariyammana%20Agrahara%20Rd%2C%20Shan%20Boga%20Colony%2C%20Yemalur%2C%20Bellandur%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1583828362069!5m2!1sen!2sin"/>
        </Layout>
    );
};

export default Key;