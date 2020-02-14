import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import '../GlobalStyles/styles.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';

import FloorPlanOne from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor3.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor8.jpg';

import ExteriorFirst from '../Imagesa/Images/sliderone.jpg';
import ExteriorSecond from '../Imagesa/Images/slidertwo.jpg';
import ExteriorThird from '../Imagesa/Images/sliderthree.jpg';
import ExteriorFourth from '../Imagesa/Images/sliderfour.jpg';

import InteriorOne from '../Imagesa/Images/latestBedroom.jpg';
import InteriorTwo from '../Imagesa/Images/latestDining.jpg';
import InteriorThree from '../Imagesa/Images/latestHall.jpg';
import InteriorFour from '../Imagesa/Images/latestPeace.jpg'; 

import MasterPlanabcd from '../Imagesa/Images/masterPlan.jpg';

import carbonHealingHomes from '../Imagesa/Images/CarbonHealing.jpg';
import SmartHomes from '../Imagesa/Images/smart.jpg';



const Gallery = () => {
    const [carbon, setcarbon] = useState([{
        name:"Carbon Healing",
        image: carbonHealingHomes
    }]);

    const [smart, setsmart] = useState([{
        name:"Smart Home",
        image:SmartHomes
    }]);

    const [exterior, setexterior] = useState([
        {
             name:"Outermost view",
             image: ExteriorFirst
        },
        {
             name:"Nature Side Walk",
             image: ExteriorSecond
        },
        {
            name:"From the Pool View",
            image: ExteriorThird
        },
        {
            name:"Areal view",
            image: ExteriorFourth
        }
        ]);

        const [interior, setinterior] = useState([
            {
            name:"Bed Room",
            image: InteriorOne
            },
            {
             name:"Dining Hall",
             image: InteriorTwo
            },
            {
                name:"Hall",
                image: InteriorThree
            },
            {
                name:"Balcony View",
                image: InteriorFour
            }]);


            const [floorsetone, setfloorsetone] = useState([
                {
                name:"646 SqFt",
                image: FloorPlanOne
                },
                {
                 name:"652 SqFt",
                 image: FloorPlanTwo
                },
                {
                    name:"984 SqFt",
                    image: FloorPlanThree
                },
                {
                    name:"999 SqFt",
                    image: FloorPlanFour
             }]);


           
        const [masterplan, setmasterplan] = useState([
            {
                name:"Master Plan Hyde",
                image:MasterPlanabcd
            }
        ]);

    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Sun And Sanctum Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div>
              <Title title="Interior, Exterior & Masterplan"/>
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior}/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>} mplan={<LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>}/>
              </div>
              <div>
              <Title title="Sun And Sanctum Floor Plans"/>
              <TabContainer title1="Floor Plan" title2="Carbon Healing Home" title3="Smart Home"  exterior={<LightHouseabc images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]} state={floorsetone}/>}  interior={<LightHouseabc images={[carbonHealingHomes]} state={carbon}/>} mplan={<LightHouseabc images={[SmartHomes]} state={smart}/>}/>
              </div>
            </div>             
            </div>
        </div>
    );
};

export default Gallery;