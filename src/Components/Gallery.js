import React, { useState } from "react"
import TitleComponent from "../Components/Title"
import "../GlobalStyles/styles.css"
import TabContainer from "../Components/tabs"
import Title from "../Components/Title"
import LightHouseabc from "../Components/Lighthouse"

import FloorPlanOne from "../Imagesa/Images/floorplans/prestige-waterford-type-a1.jpg"
import FloorPlanTwo from "../Imagesa/Images/floorplans/prestige-waterford-type-a2.jpg"
import FloorPlanThree from "../Imagesa/Images//floorplans/prestige-waterford-type-a3.jpg"

import FloorPlanFour from "../Imagesa/Images/floorplans/prestige-waterford-type-b1a.jpg"
import FloorPlanFive from "../Imagesa/Images/floorplans/prestige-waterford-type-b2a.jpg"
import FloorPlanSix from "../Imagesa/Images/floorplans/prestige-waterford-type-b3a.jpg"
import FloorPlanseven from "../Imagesa/Images/floorplans/prestige-waterford-type-c1a.jpg"
import FloorPlanEight from "../Imagesa/Images/floorplans/prestige-waterford-type-c2a.jpg"

import FloorPlanEightone from "../Imagesa/Images/floorplans/prestige-waterford-type-b1.jpg"
import FloorPlanEighttwo from "../Imagesa/Images/floorplans/prestige-waterford-type-b2.jpg"
import FloorPlanEightthree from "../Imagesa/Images/floorplans/prestige-waterford-type-b3.jpg"
import FloorPlanEightfour from "../Imagesa/Images/floorplans/prestige-waterford-type-c1.jpg"
import FloorPlanEightfive from "../Imagesa/Images/floorplans/prestige-waterford-type-c2.jpg"
import FloorPlanEightsix from "../Imagesa/Images/floorplans/prestige-waterford-type-d2a.jpg"
import FloorPlanEightseven from "../Imagesa/Images/floorplans/prestige-waterford-type-d1.jpg"
import FloorPlanEighteight from "../Imagesa/Images/floorplans/prestige-waterford-type-d2.jpg"

import ExteriorFirst from "../Imagesa/Images/prestige-waterford-banner.jpg"
import ExteriorSecond from "../Imagesa/Images/Coming-Soon-Project-.jpg"
import ExteriorThird from "../Imagesa/Images/Coming-Soon-Project-.jpg"
import ExteriorFourth from "../Imagesa/Images/Coming-Soon-Project-.jpg"

import InteriorOne from "../Imagesa/Images/Coming-Soon-Project-.jpg"
import InteriorTwo from "../Imagesa/Images/Coming-Soon-Project-.jpg"
import InteriorThree from "../Imagesa/Images/Coming-Soon-Project-.jpg"
import InteriorFour from "../Imagesa/Images/Coming-Soon-Project-.jpg"

import MasterPlanabcd from "../Imagesa/Images/prestige-waterford-masterplan.jpg"

const Gallery = () => {
  const [exterior, setexterior] = useState([
    {
      name: "Outermost view",
      image: ExteriorFirst,
    },
    {
      name: "Nature Side Walk",
      image: ExteriorSecond,
    },
    {
      name: "From the Pool View",
      image: ExteriorThird,
    },
    {
      name: "Areal view",
      image: ExteriorFourth,
    },
  ])

  const [interior, setinterior] = useState([
    {
      name: "Bed Room",
      image: InteriorOne,
    },
    {
      name: "Dining Hall",
      image: InteriorTwo,
    },
    {
      name: "Hall",
      image: InteriorThree,
    },
    {
      name: "Balcony View",
      image: InteriorFour,
    },
  ])

  const [floorsetone, setfloorsetone] = useState([
    {
      name: "1 BHK Type A1",
      image: FloorPlanOne,
    },
    {
      name: "1 BHK Type A2",
      image: FloorPlanTwo,
    },
    {
      name: "1 BHK Type A3",
      image: FloorPlanThree,
    },
  ])

  const [floorsettwo, setfloorsettwo] = useState([
    {
      name: "2 BHK Type B1A",
      image: FloorPlanFive,
    },
    {
      name: "2 BHK Type B2A",
      image: FloorPlanSix,
    },
    {
      name: "2 BHK Type B3A",
      image: FloorPlanseven,
    },
    {
      name: "2 BHK Type C1A",
      image: FloorPlanseven,
    },
    {
      name: "2 BHK Type C2A",
      image: FloorPlanEight,
    },
  ])

  const [floorsetthree, setfloorsetthree] = useState([
    {
      name: "3 BHK Type B1",
      image: FloorPlanEightone,
    },
    {
      name: "3 BHK Type B2",
      image: FloorPlanEighttwo,
    },
    {
      name: "3 BHK Type B3",
      image: FloorPlanEightthree,
    },
    {
      name: "3 BHK Type C1",
      image: FloorPlanEightfour,
    },
    {
      name: "3 BHK Type C2",
      image: FloorPlanEightfive,
    },
    {
      name: "3 BHK Type D2A",
      image: FloorPlanEightsix,
    },
    {
      name: "4 BHK Type D1",
      image: FloorPlanEightseven,
    },
    {
      name: "4 BHK Type D2",
      image: FloorPlanEighteight,
    },
  ])

  const [masterplan, setmasterplan] = useState([
    {
      name: "Master Plan",
      image: MasterPlanabcd,
    },
  ])

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title=" Waterford Gallery" />
        <br />
        <div className="galleryImages">
          <div>
            <Title title="Interior, Exterior & Masterplan" />
            <TabContainer
              title1="Exterior View"
              title2="Interior View"
              title3="Master Plan"
              number="2"
              exterior={
                <LightHouseabc
                  images={[
                    ExteriorFirst,
                    ExteriorSecond,
                    ExteriorThird,
                    ExteriorFourth,
                  ]}
                  state={exterior}
                  height="200px"
                />
              }
              interior={
                <LightHouseabc
                  images={[
                    InteriorOne,
                    InteriorTwo,
                    InteriorThree,
                    InteriorFour,
                  ]}
                  state={interior}
                />
              }
              mplan={
                <LightHouseabc images={[MasterPlanabcd]} state={masterplan} />
              }
            />
          </div>
          <div>
            <Title title=" Waterford Floor Plans" />
            <TabContainer
              title1="Floor Plans 1BHK"
              title2="Floor Plan 2BHk"
              title3="Floor Plan 3 & 4BHk"
              exterior={
                <LightHouseabc
                  images={[FloorPlanOne, FloorPlanTwo, FloorPlanThree]}
                  state={floorsetone}
                />
              }
              interior={
                <LightHouseabc
                  images={[
                    FloorPlanFour,
                    FloorPlanFive,
                    FloorPlanSix,
                    FloorPlanseven,
                    FloorPlanEight,
                  ]}
                  state={floorsettwo}
                />
              }
              mplan={
                <LightHouseabc
                  images={[
                    FloorPlanEightone,
                    FloorPlanEighttwo,
                    FloorPlanEightthree,
                    FloorPlanEightfour,
                    FloorPlanEightfive,
                    FloorPlanEightsix,
                    FloorPlanEightseven,
                    FloorPlanEighteight,
                  ]}
                  state={floorsetthree}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
