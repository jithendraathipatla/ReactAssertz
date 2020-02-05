import React,{useState} from 'react';
import TitleComponent from '../Components/Title';
import './Gallery.css';
import TabContainer from '../Components/tabs';
import Title from '../Components/Title';
import LightHouseabc from '../Components/Lighthouse';

import FloorPlanOne from '../Images/floor1.jpg';
import FloorPlanTwo from '../Images/floor2.jpg';
import FloorPlanThree from '../Images/floor3.jpg';
import FloorPlanFour from '../Images/floor4.jpg';
import FloorPlanFive from '../Images/floor5.jpg';
import FloorPlanSix from '../Images/floor6.jpg';
import FloorPlanseven from '../Images/floor7.jpg';
import FloorPlanEight from '../Images/floor8.jpg';
import FloorPlanNine from '../Images/floor9.jpg';
import FloorPlanTen from '../Images/floor10.jpg';
import FloorPlanEleven from '../Images/floor11.jpg';

import ExteriorFirst from '../Images/slider1.jpg';
import ExteriorSecond from '../Images/slider2.jpg';
import ExteriorThird from '../Images/slider3.jpg';
import ExteriorFourth from '../Images/slider5.jpg';

import InteriorOne from '../Images/interior1.jpeg';
import InteriorTwo from '../Images/interior3.jpeg';
import InteriorThree from '../Images/interior5.jpeg';
import InteriorFour from '../Images/interior6.jpeg'; 

import MasterPlanabcd from '../Images/mplan.jpg';



const Gallery = () => {
    const [exterior, setexterior] = useState([
        {
        name:"Exterior one",
        image: ExteriorFirst
        },
        {
         name:"Exterior Two",
         image: ExteriorSecond
        },
        {
            name:"Exterior Three",
            image: ExteriorThird
        },
        {
            name:"Exterior Four",
            image: ExteriorFourth
        }
        ]);

        const [interior, setinterior] = useState([
            {
            name:"Interior one",
            image: InteriorOne
            },
            {
             name:"Interior Two",
             image: InteriorTwo
            },
            {
                name:"Interior Three",
                image: InteriorThree
            },
            {
                name:"Interior Four",
                image: InteriorFour
            }]);


            const [floorsetone, setfloorsetone] = useState([
                {
                name:"Interior one",
                image: FloorPlanOne
                },
                {
                 name:"Interior Two",
                 image: FloorPlanTwo
                },
                {
                    name:"Interior Three",
                    image: FloorPlanThree
                },
                {
                    name:"Interior Four",
                    image: FloorPlanFour
             }]);


             const [floorsettwo, setfloorsettwo] = useState([
                {
                name:"Interior one",
                image: FloorPlanFive
                },
                {
                 name:"Interior Two",
                 image: FloorPlanSix
                },
                {
                    name:"Interior Three",
                    image: FloorPlanseven
                },
                {
                    name:"Interior Four",
                    image: FloorPlanEight
             }]);



             const [floorsetthree, setfloorsetthree] = useState([
                {
                name:"Interior one",
                image: FloorPlanNine
                },
                {
                 name:"Interior Two",
                 image: FloorPlanTen
                },
                {
                    name:"Interior Three",
                    image: FloorPlanEleven
                },
               ]);


            

        const [masterplan, setmasterplan] = useState([
            {
                name:"Marq Master Plan",
                image:MasterPlanabcd
            }
        ]);

    
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Marq Gallery"/>
            <br/>
            <div  className="galleryImages">
              <div>
              <Title title="Marq Interior, Exterior & Masterplan"/>
              <TabContainer title1="Exterior" title2="Interior" title3="Master Plan" exterior={<LightHouseabc images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior} height="200px"/>}  interior={<LightHouseabc images={[InteriorOne, InteriorTwo, InteriorThree, InteriorFour]} state={interior}/>} mplan={<LightHouseabc images={[MasterPlanabcd]} state={masterplan}/>}/>
              </div>
              <div>
              <Title title="Marq Floor Plans"/>
              <TabContainer title1="Part I" title2="Part II" title3="Part III" exterior={<LightHouseabc images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree, FloorPlanFour]} state={floorsetone}/>}  interior={<LightHouseabc images={[FloorPlanFive, FloorPlanSix, FloorPlanseven, FloorPlanEight]} state={floorsettwo}/>} mplan={<LightHouseabc images={[FloorPlanNine, FloorPlanTen, FloorPlanEleven]} state={floorsetthree}/>}/>
              </div>
            </div>
             
            </div>
        </div>
    );
};

export default Gallery;