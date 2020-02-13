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
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow8.jpg';


import ExteriorFirst from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import ExteriorSecond from '../Imagesa/Images/prestige-finsbury-regent3.jpg';
import ExteriorThird from '../Imagesa/Images/prestige-finsbury-regent2.jpg';
import ExteriorFourth from '../Imagesa/Images/prestige-finsbury-regent4.jpg';

import InteriorOne from '../Imagesa/Images/latestBedroom.jpg';
import InteriorTwo from '../Imagesa/Images/latestDining.jpg';
import InteriorThree from '../Imagesa/Images/latestHall.jpg';
import InteriorFour from '../Imagesa/Images/latestPeace.jpg'; 

import MasterPlanabcd from '../Imagesa/Images/masterplan-hyde.jpg';
import Masterplanregent from '../Imagesa/Images/master.jpg';



const Gallery = () => {
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


             const [floorsettwo, setfloorsettwo] = useState([
                {
                name:"1224 SqFt",
                image: FloorPlanFive
                },
                {
                 name:"1277 SqFt",
                 image: FloorPlanSix
                },
                {
                    name:"1473 SqFt",
                    image: FloorPlanseven
                },
                {
                    name:"1562 SqFt",
                    image: FloorPlanEight
             }]);



        const [masterplan, setmasterplan] = useState([
            {
                name:"Master Plan Hyde",
                image:MasterPlanabcd
            },
            {
                name:"Master Plan Regent",
                image:Masterplanregent
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
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan" number="2" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior} height="200px"/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>} mplan={<LightHouseabc images={[MasterPlanabcd, Masterplanregent]} state={masterplan}/>}/>
              </div>
              <div>
              <Title title="Sun And Sanctum Floor Plans"/>
              <TabContainer title1="Hyde" title2="Regent"  exterior={<LightHouseabc images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]} state={floorsetone}/>}  interior={<LightHouseabc images={[FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight]} state={floorsettwo}/>} mplan="Please Check other Sections"/>
              </div>
            </div>             
            </div>
        </div>
    );
};

export default Gallery;