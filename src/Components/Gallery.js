import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import '../GlobalStyles/styles.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';

import FloorPlanOne from '../Imagesa/Images/HydeFloor1.jpg';
import FloorPlanTwo from '../Imagesa/Images/HydeFloor2.jpg';
import FloorPlanThree from '../Imagesa/Images/HydeFloor3.jpg';
import FloorPlanFour from '../Imagesa/Images/HydeFloor4.jpg';
import FloorPlanFive from '../Imagesa/Images/FloorRegentNow1.jpg';
import FloorPlanSix from '../Imagesa/Images/FloorRegentNow2.jpg';
import FloorPlanseven from '../Imagesa/Images/FloorRegentNow3.jpg';
import FloorPlanEight from '../Imagesa/Images/FloorRegentNow4.jpg';
import FloorPlanNine from '../Imagesa/Images/FloorRegentNow5.jpg';
import FloorPlanTen from '../Imagesa/Images/FloorRegentNow6.jpg';
import FloorPlanEleven from '../Imagesa/Images/FloorRegentNow7.jpg';
import FloorPlanTwevel from '../Imagesa/Images/FloorRegentNow8.jpg';

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
                name:"639 SqFt",
                image: FloorPlanOne
                },
                {
                 name:"646 SqFt",
                 image: FloorPlanTwo
                },
                {
                    name:"650 SqFt",
                    image: FloorPlanThree
                },
                {
                    name:"652 SqFt",
                    image: FloorPlanFour
             }]);


             const [floorsettwo, setfloorsettwo] = useState([
                {
                name:"862 SqFt",
                image: FloorPlanFive
                },
                {
                 name:"1054 SqFt",
                 image: FloorPlanSix
                },
                {
                    name:"1173 SqFt",
                    image: FloorPlanseven
                },
                {
                    name:"1244 SqFt",
                    image: FloorPlanEight
             }]);



             const [floorsetthree, setfloorsetthree] = useState([
                {
                name:"1277 SqFt",
                image: FloorPlanNine
                },
                {
                 name:"1473 SqFt",
                 image: FloorPlanTen
                },
                {
                    name:"1552 SqFt",
                    image: FloorPlanEleven
                },
                {
                    name:"1562 SqFt",
                    image: FloorPlanTwevel
                },
               ]);

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
            <TitleComponent title="Marq Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div>
              <Title title="Interior, Exterior & Masterplan"/>
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior} height="200px"/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>} mplan={<LightHouseabc images={[MasterPlanabcd, Masterplanregent]} state={masterplan}/>}/>
              </div>
              <div>
              <Title title="Finsbury Park Floor Plans"/>
              <TabContainer title1="Hyde" title2="Regent" title3="Regent" exterior={<LightHouseabc images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]} state={floorsetone}/>}  interior={<LightHouseabc images={[FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight]} state={floorsettwo}/>} mplan={<LightHouseabc images={[FloorPlanNine, FloorPlanTen, FloorPlanEleven, FloorPlanTwevel]} state={floorsetthree}/>}/>
              </div>
            </div>             
            </div>
        </div>
    );
};

export default Gallery;