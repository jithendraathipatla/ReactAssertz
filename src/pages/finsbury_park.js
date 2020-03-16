import React, { useState } from "react"
import Layout from "../Components/Layout"
import GalleryComponent from "../Components/Gallery"
import ConfigurationComponent from "../Components/ConfigurationTabel"
import Amenities from "../Components/Amenities"
import OverviewComponent from "../Components/StatefulOverview";
import LocationComponent from "../Components/Location";
import SliderComponent from "../Components/Slider";
import CostingComponent from "../Components/Pricingcomponent";

import FirstSliderImage from "../Imagesa/Images/prestige-finsbury-park-hyde1.jpg"
import SecondSliderImage from "../Imagesa/Images/prestige-finsbury-park-hyde3.jpg"
import ThirdSliderImage from "../Imagesa/Images/prestige-finsbury-regent1.jpg"
import FourthSliderImage from "../Imagesa/Images/prestige-finsbury-regent4.jpg"

import InteriorOne from '../Imagesa/Images/latestBedroom.jpg';
import InteriorTwo from '../Imagesa/Images/latestDining.jpg';
import InteriorThree from '../Imagesa/Images/latestHall.jpg';
import InteriorFour from '../Imagesa/Images/latestPeace.jpg'; 


import masterplanhyde from "../Imagesa/Images/masterplan-hyde.jpg"
import masterplanregent from "../Imagesa/Images/master.jpg"

import FloorPlanOne from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanTwo from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanThree from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFour from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanFive from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanSix from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanseven from '../Imagesa/Images/Coming-Soon-Project-.jpg';
import FloorPlanEight from '../Imagesa/Images/Coming-Soon-Project-.jpg';



import ProjectLogo from "../Imagesa/Images/finsbury.svg"
import Pricingcomponent from "../Components/Pricingcomponent"

const Finsbury = () => {
  const [squarefeet, setsquarefeet] = useState([
    {
      bed: "1 BHk -  Hyde",
      feet: "636 - 652",
      price: 33.5,
    },
    {
      bed: "2 BHK - Hyde",
      feet: "955 - 999",
      price: 50.6,
    },
    {
      bed: "3 BHK + 2T - Regent",
      feet: "1244 - 1277",
      price: 63,
    },
    {
      bed: "3 BHK + 3T - Regent",
      feet: "1431 - 1562",
      price: 73,
    },
  ])

  const [masterplan, setmasterplan] = useState([
    {
      img: masterplanhyde,
      name: "Hyde",
    },
    {
      img: masterplanregent,
      name: "Regent",
    },
  ])

  const [exterior, setexterior] = useState([
    {
      img: FirstSliderImage,
      name: "Exterior View - Hyde",
    },
    {
      img: SecondSliderImage,
      name: "Exterior View - Hyde",
    },
    {
      img: ThirdSliderImage,
      name: "Exterior View - Regent",
    },
    {
      img: FourthSliderImage,
      name: "Exterior View - Regent",
    },
  ])

  const [interior, setinterior] = useState([
    {
      name: "Bed Room",
      img: InteriorOne,
    },
    {
      name: "Dining Hall",
      img: InteriorTwo,
    },
    {
      name: "Hall",
      img: InteriorThree,
    },
    {
      name: "Balcony View",
      img: InteriorFour,
    },
  ])

  const [floorsetone, setfloorsetone] = useState([
    {
      name: "Floor Plan",
      image: FloorPlanOne,
    },
    {
      name: "Floor Plan",
      image: FloorPlanTwo,
    },
    {
      name: "Floor Plan",
      image: FloorPlanThree,
    },
    {
      name: "Floor Plan",
      image: FloorPlanFour,
    },
  ])

  const [floorsettwo, setfloorsettwo] = useState([
    {
      name: "Floor Plan",
      image: FloorPlanFive,
    },
    {
      name: "Floor Plan",
      image: FloorPlanSix,
    },
    {
      name: "Floor Plan",
      image: FloorPlanseven,
    },
    {
      name: "Floor Plan",
      image: FloorPlanEight,
    },
  ])

  const [lightext, setlightext] = useState([
    FirstSliderImage,
    SecondSliderImage,
    ThirdSliderImage,
    FourthSliderImage,
  ])
  const [lighint, setlighint] = useState([InteriorOne, InteriorTwo, InteriorThree, InteriorFour])
  const [lightmas, setlighmas] = useState([masterplanhyde, masterplanregent])

  return (
    <Layout title="prestige finsbury park | reviews | Brouchere | Location">
      <SliderComponent
        one={FirstSliderImage}
        two={SecondSliderImage}
        three={ThirdSliderImage}
        four={FourthSliderImage}
        one={FirstSliderImage}
        two={SecondSliderImage}
        three={ThirdSliderImage}
        four={FourthSliderImage}
        phase="Pre_launch"
        project="PRESTIGE FINSBURY PARK"
        location="In Bagular,"
        attractiveone="Hurry! Only 1% GST"
        atteractivetwo="PMAY benefits"
        bedroomone="1, "
        bedroomtwo="2"
        bedroomthree="3"
        price="33.5"
      />
      <br />
      <OverviewComponent
        project="Finsbury Park Overview"
        loc="Baglur Road"
        area="Hyde:15, Regent:10 A"
        units="Hyde:2092, Regent: 958"
        towers="12T"
        floors="B+G+20 Floors"
        var="1,2&3 Bhk"
        poss="2023"
      />
      <hr />
      <ConfigurationComponent
        project="Finsbury park Configuration"
        tabelone={squarefeet}
      />
      <hr />
      <GalleryComponent
        project="Finsbury park Gallery"
        Exterior={exterior}
        ExteriorImages={lightext}
        Interior={interior}
        InteriorImages={lighint}
        Mprop={masterplan}
        MImagesprop={lightmas}
      />
      <hr />
      <Amenities project="Finsbury Park Amenities" />
      <hr />
      <Pricingcomponent project="Finsbury Park Pricing" tabeltwo={squarefeet} />
      <hr />
      <LocationComponent
        title="Finsbury Park Location"
        logo={ProjectLogo}
        iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15540.99810165567!2d77.66788112783367!3d13.14665435185809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1b7d5e8061c3%3A0xd0be65d7c84b08a7!2sPrestige%20Finsbury%20Park!5e0!3m2!1sen!2sin!4v1583828086918!5m2!1sen!2sin"
      />
    </Layout>
  )
}

export default Finsbury
