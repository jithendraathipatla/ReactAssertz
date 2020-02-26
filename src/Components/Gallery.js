import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import '../GlobalStyles/styles.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';

import FloorPlanOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFour from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFive from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanSix from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanseven from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanEight from '../Imagesa/Images/Coming-Soon-Project-.jpg';


import ExteriorFirst from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import ExteriorSecond from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import ExteriorThird from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import ExteriorFourth from '../Imagesa/Images/Coming-Soon-Project-.jpg';

import InteriorOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import InteriorTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import InteriorThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import InteriorFour from '../Imagesa/Images/Coming-Soon-Project-.jpg'; 

import MasterPlanabcd from '../Imagesa/Images/Coming-Soon-Project-.jpg';



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
                name:"Floor Plan",
                image: FloorPlanOne
                },
                {
                 name:"Floor Plan",
                 image: FloorPlanTwo
                },
                {
                    name:"Floor Plan",
                    image: FloorPlanThree
                },
                {
                    name:"Floor Plan",
                    image: FloorPlanFour
             }]);


             const [floorsettwo, setfloorsettwo] = useState([
                {
                name:"Floor Plan",
                image: FloorPlanFive
                },
                {
                 name:"Floor Plan",
                 image: FloorPlanSix
                },
                {
                    name:"Floor Plan",
                    image: FloorPlanseven
                },
                {
                    name:"Floor Plan",
                    image: FloorPlanEight
             }]);



        const [masterplan, setmasterplan] = useState([
            {
                name:"Master Plan Hyde",
                image:MasterPlanabcd
            },
           
        ]);

    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title=" Waterford Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div>
              <Title title="Interior, Exterior & Masterplan"/>
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan" number="2" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior} height="200px"/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>} mplan={<LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>}/>
              </div>
              <div>
              <Title title=" Waterford Floor Plans"/>
              <TabContainer title1="Floor Plans"  exterior={<LightHouseabc images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]} state={floorsetone}/>}  interior={<LightHouseabc images={[FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight]} state={floorsettwo}/>} mplan="Please Check other Sections"/>
              </div>
            </div>             
            </div>
        </div>
    );
};

export default Gallery;