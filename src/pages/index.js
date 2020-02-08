import React from "react";
import NavBar from '../Components/NavBar';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Overview from '../Components/StatefulOverview';
import ConfigurationPart from '../Components/Configration';
import Description from '../Components/Description';
import Gallery from '../Components/Gallery';
import Costing from '../Components/Costing';
import LocationPart from '../Components/Location';
import Amenities from '../Components/Amenities';
import SEOComponent from '../Components/SEO';
import Slider from '../Components/Slider';
import SideMenuBar from '../Components/SideMenu';
import HighlightForm from '../Components/HighlightForm';



export default () => {
    return(
        <div >
          <SEOComponent title="Assertz Marq 2.0 | Assertz Marq" des="This webpage provides all the Information about Assertz Marq 2.0 . You will be able to see all the related Information on Assertz Marq 2.0 starting from Overview of the Project to the Location."/>
          <NavBar/>
          <div className="slider">
          <div className="backgroundSlider">
          <Slider/>
          </div>
          <div className="backgroundForm">
          <HighlightForm/>
          </div>
          </div>
          <SideMenuBar/>
          <div className="box" >
          <div className="card">
          <div style={{textAlign:"center"}} >
           <Title title="About Assertz Marq 2.0"/>
           </div>
          <Description>
          <p style={{textAlign:"justify"}}>
         Assetz Marq has set up itself as one of the main names among the Builders and
          engineers in Bangalore. They have assembled two world-class IT tech
          stops in Bangalore: Vrindavan Tech Town (presently International safe
          have Tech Town) - India's first Platinum LEED guaranteed IT SEZ, and
          Worldwide Innovation Park.Assetz Marq 2.0 is fresh out of the box new private venture by Assetz homes.
           Assetz Marq is exceptionally extensive and has sumptuous highlights.
            This undertaking has great availability to all the significant urban areas and is situated in the core of Whitefield.
             This venture is developed in 22 acres of open land with 297 units with G+28 Floors. The Assetz Marq area is on the Main Road of Whitefield. 
             Assetz Marq 2.0 value is entirely moderate to every one of the segments of the individuals. 
             It has a unique mix of the private and business spaces found in Kannamangala on the Hoskote - Whitefield fundamental street, Bangalore that is all around related to the genuine avenues, social and business establishments. These apartment suites have 4 squares and are offering 2BHK and 3BHK private pads nearby the confined houses in sensible costs. 
          
        </p>
        </Description>
        </div>
        <hr/>
        <Overview/>
        <hr/>
        <ConfigurationPart/>
        <hr/>
        <Gallery/>
        <hr/>
        <Amenities/>
        <hr/>
        <Costing/>
        <hr/>
        
        <LocationPart/>
         
          </div>
       
           <Footer/>
          </div>
       
    )
}
