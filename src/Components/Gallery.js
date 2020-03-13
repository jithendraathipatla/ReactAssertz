import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import '../GlobalStyles/styles.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';

import floorOne from '../Imagesa/Images/gallery/Auriga-towerA-one.jpg';
import floorTwo from '../Imagesa/Images/gallery/Auriga-towerA-two.jpg';
import floorThree from '../Imagesa/Images/gallery/Auriga-towerA-three.jpg';
import floorFour from '../Imagesa/Images/gallery/Auriga-towerA-four.jpg';
import floorFive from '../Imagesa/Images/gallery/Auriga-towerA-five.jpg';
import floorSix from '../Imagesa/Images/gallery/Auriga-towerA-six.jpg';


import BfloorOne from '../Imagesa/Images/gallery/Auriga-towerB-one.jpg';
import BfloorTwo from '../Imagesa/Images/gallery/Auriga-towerB-two.jpg';
import BfloorThree from '../Imagesa/Images/gallery/Auriga-towerB-three.jpg';
import BfloorFour from '../Imagesa/Images/gallery/Auriga-towerB-four.jpg';
import BfloorFive from '../Imagesa/Images/gallery/Auriga-towerB-five.jpg';
import BfloorSix from '../Imagesa/Images/gallery/Auriga-towerB-six.jpg';


import CfloorOne from '../Imagesa/Images/gallery/Auriga-towerC-one.jpg';
import CfloorTwo from '../Imagesa/Images/gallery/Auriga-towerC-two.jpg';
import CfloorThree from '../Imagesa/Images/gallery/Auriga-towerC-three.jpg';
import CfloorFour from '../Imagesa/Images/gallery/Auriga-towerC-four.jpg';
import CfloorFive from '../Imagesa/Images/gallery/Auriga-towerC-five.jpg';
import CfloorSix from '../Imagesa/Images/gallery/Auriga-towerC-six.jpg';
import CfloorSeven from '../Imagesa/Images/gallery/Auriga-towerc-seven.jpg';


import ExteriorFirst from '../Imagesa/Images/exterior_new1.jpg';
import ExteriorSecond from '../Imagesa/Images/exterior_new2.jpg';
import ExteriorThird from '../Imagesa/Images/exterior_new3.jpg';
import ExteriorFourth from '../Imagesa/Images/exterior_new4.jpg';
import ExteriorFifth from '../Imagesa/Images/exterior_new5.jpg';


import InteriorOne from '../Imagesa/Images/latestBedroom.jpg';
import InteriorTwo from '../Imagesa/Images/latestDining.jpg';
import InteriorThree from '../Imagesa/Images/latestHall.jpg';
import InteriorFour from '../Imagesa/Images/latestPeace.jpg'; 

import MasterPlanabcd from '../Imagesa/Images/gallery/Auriga-master.jpg';



const Gallery = () => {
    const [exterior, setexterior] = useState([
        {
             name:"Pool View",
             image: ExteriorFirst
        },
        {
             name:"Nature Side Walk",
             image: ExteriorSecond
        },
        {
            name:"Nuture View",
            image: ExteriorThird
        },
        {
            name:"Areal view",
            image: ExteriorFourth
        },
        {
            name:"Outerdoor Space",
            image: ExteriorFifth
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


            const [floorPlan, setfloorPlan] = useState([
                {
                  name:"1151 Sq.ft",
                  image: floorOne,
                },
                {
                  name:"1361 Sq.ft",
                  image:floorTwo,
                },
               
                {
                  name:"1074 Sq.ft",
                  image: floorThree,
                },
                 {
                  name:"1758 Sq.ft",
                  image: floorFour,
                },
                
                {
                  name:"1351 Sq.ft",
                  image: floorFive,
                },
                {
                  name:"1164 Sq.ft",
                  image: floorSix,
                },
              
              ]);
          
          
              const [BfloorPlan, BsetfloorPlan] = useState([
                {
                  name:"833 Sq.ft",
                  image: BfloorOne,
                },
                {
                  name:"1371 Sq.ft",
                  image:BfloorTwo,
                },
               
                {
                  name:"1139 Sq.ft",
                  image: BfloorThree,
                },
                 {
                  name:"1097 Sq.ft",
                  image: BfloorFour,
                },
                
                {
                  name:"837 Sq.ft",
                  image: BfloorFive,
                },
                {
                  name:"1344 Sq.ft",
                  image: BfloorSix,
                },
              
              ]);
          
              const [CfloorPlan, CsetfloorPlan] = useState([
                {
                  name:"1344 Sq.ft",
                  image: CfloorOne,
                },
                {
                  name:"1312 Sq.ft",
                  image:CfloorTwo,
                },
               
                {
                  name:"1136 Sq.ft",
                  image: CfloorThree,
                },
                 {
                  name:"1758 Sq.ft",
                  image: CfloorFour,
                },
                
                {
                  name:"1074 Sq.ft",
                  image: CfloorFive,
                },
                {
                  name:"1744 Sq.ft",
                  image: CfloorSix,
                },
                {
                  name:"1366 Sq.ft",
                  image: CfloorSeven,
                },
              
              ]);


        const [masterplan, setmasterplan] = useState([
            {
                name:"Master Plan",
                image:MasterPlanabcd,
            },
           
        ]);

    return (
        <div className="maingallery">
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Auriga Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div>
              <Title title="Interior, Exterior & Masterplan"/>
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior} height="200px"/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>}  mplan={<LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>} />
              </div>
              <div>
              <Title title="Auriga Floor Plans"/>
              <TabContainer title1="Tower A" title2="Tower B" title3="Tower C" interior={<LightHouseabc images={[floorOne, floorTwo, floorThree, floorFour, floorFive, floorSix]} state={floorPlan} />} exterior={<LightHouseabc images={[BfloorOne, BfloorTwo, BfloorThree, BfloorFour, BfloorFive, BfloorSix]} state={BfloorPlan}/>}  mplan={<LightHouseabc images={[CfloorOne, CfloorTwo, CfloorThree, CfloorFour, CfloorFive, CfloorSix, CfloorSeven]} state={CfloorPlan}/>} /> 
              </div>
            </div>             
            </div>
        </div>
    );
};

export default Gallery;