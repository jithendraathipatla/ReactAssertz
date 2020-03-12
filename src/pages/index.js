import React from "react"
import NavBar from "../Components/NavBar"
import Title from "../Components/Title"
import Footer from "../Components/Footer"


import SEOComponent from "../Components/SEO"
import HighlightFormTwo from "../Components/HighlightFormTwo"
import Slider from "../Components/Slider"
import HighlightForm from "../Components/HighlightForm"
import CardswithProjects from "../Components/Projects"
import FirstSliderImage from '../Imagesa/Images/prestige-finsbury-park-hyde1.jpg';
import SecondSliderImage from '../Imagesa/Images/willo/slider-one.jpg';
import ThirdSliderImage from '../Imagesa/Images/songofsouth/slider-one.jpg';
import FourthSliderImage from '../Imagesa/Images/Elysian/first.jpg';

export default () => {
  return (
    <div>
      <div className="backgroundSlider">
        <SEOComponent
          title="Prestige constructions | Prestige Properties | Prestige Group | New launch | Ready to move in"
          des="This webpage gives you all the Information about the upcoming Prestige Waterford Apartments in Whitefield, Bangalore. This page briefs you all the details of prestige Waterford Apartments starting from floor Pan to the reviews."
        />
        <NavBar />
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
        <div className="slider">
          <Slider one={FirstSliderImage} two={SecondSliderImage} three={ThirdSliderImage} four={FourthSliderImage} phase="Prestige Group" project="Prestige Constructions" location="In" attractiveone="Bangalore`s Best Apartments" atteractivetwo="Hurry! Book now" bedroomone="11" bedroomtwo="2, 3" bedroomthree="4" price="30"/>
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <Title title="About Prestige  Properties" />
        </div>
        <CardswithProjects />
      </div>
      <br/>
      <br/>
      <Footer />
    </div>
  )
}
