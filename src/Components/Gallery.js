import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import '../GlobalStyles/styles.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';

import FloorPlanOne from '../Imagesa/Images/floorone.jpg';
import FloorPlanTwo from '../Imagesa/Images/floortwo.jpg';
import FloorPlanThree from '../Imagesa/Images/floorthree.jpg';

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
             name:"Nature Walk",
             image: ExteriorSecond
        },
        {
            name:"Areal View",
            image: ExteriorThird
        },
        {
            name:"Pool view",
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
                name:"2 BHK",
                image: FloorPlanOne
                },
                {
                 name:"3 BHK + 2T",
                 image: FloorPlanTwo
                },
                {
                    name:"3 BHK + 3T",
                    image: FloorPlanThree
                },
                  
               
               ]);


           
        const [masterplan, setmasterplan] = useState([
            {
                name:"Master Plan",
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
              <TabContainer title1="Exterior View" title2="Interior View" title3="Master Plan" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior}/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>} mplan={<LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>}/>
              </div>
              <div>
              <Title title="Sun And Sanctum Floor Plans"/>
              <TabContainer title1="Floor Plan" title2="Carbon Healing Home" title3="Smart Home"  exterior={<LightHouseabc images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree]} state={floorsetone}/>}  interior={<LightHouseabc images={[carbonHealingHomes]} state={carbon}/>} mplan={<LightHouseabc images={[SmartHomes]} state={smart}/>}/>
              </div>
            </div>             
            </div>
        </div>
    );
};

export default Gallery;