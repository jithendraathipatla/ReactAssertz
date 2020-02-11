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

import InteriorOne from '../Images/interior1.jpeg';
import InteriorTwo from '../Images/interior3.jpeg';
import InteriorThree from '../Images/interior5.jpeg';
import InteriorFour from '../Images/interior6.jpeg'; 

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
            name:"Inside Hall",
            image: InteriorOne
            },
            {
             name:"Bed Room",
             image: InteriorTwo
            },
            {
                name:"Balcony View",
                image: InteriorThree
            },
            {
                name:"Entrance",
                image: InteriorFour
            }]);


            const [floorsetone, setfloorsetone] = useState([
                {
                name:"1451 SqFt",
                image: FloorPlanOne
                },
                {
                 name:"1022 SqFt",
                 image: FloorPlanTwo
                },
                {
                    name:"1027 SqFt",
                    image: FloorPlanThree
                },
                {
                    name:"1208 SqFt",
                    image: FloorPlanFour
             }]);


             const [floorsettwo, setfloorsettwo] = useState([
                {
                name:"1055 SqFt",
                image: FloorPlanFive
                },
                {
                 name:"1703 SqFt",
                 image: FloorPlanSix
                },
                {
                    name:"1030 SqFt",
                    image: FloorPlanseven
                },
                {
                    name:"1174 SqFt",
                    image: FloorPlanEight
             }]);



             const [floorsetthree, setfloorsetthree] = useState([
                {
                name:"1193 SqFt",
                image: FloorPlanNine
                },
                {
                 name:"1071 SqFt",
                 image: FloorPlanTen
                },
                {
                    name:"1733 SqFt",
                    image: FloorPlanEleven
                },
                {
                    name:"1733 SqFt",
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