import React from "react";
import NavBar from '../Components/NavBar';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Overview from '../Components/StatefulOverview';
import ConfigurationPart from '../Components/Configration';
import Description from '../Components/Description';
import Gallery from '../Components/Gallery';
import LocationPart from '../Components/Location';
import Amenities from '../Components/Amenities';
import SEOComponent from '../Components/SEO';
import HighlightFormTwo from '../Components/HighlightFormTwo';
import Slider from '../Components/Slider';
import TabsContainerOne from '../Components/Costing';
import SideMenuBar from '../Components/SideMenu';
import HighlightForm from '../Components/HighlightForm';



export default () => {
    return(
        <div >
          <SEOComponent title="Prestige FinsBury Park | Prestige FinsBury Park - Hyde,Regent" des="This webpage provides all the Information on Prestige FinsBury Park . You will be able to see all the related Information on Prestige FinsBury park [Hyde, Regent], starting from Overview of the Project to the Location."/>
          <NavBar/>
          <div className="slider">
          <div className="backgroundSlider">
          <Slider/>
          </div>
          <div className="backgroundForm">
          <HighlightForm/>
          </div>
          <div className="backgroundFormTwo">
          <HighlightFormTwo/>
          </div>
          </div>
          <SideMenuBar/>
          <div className="box" >
        
          <div style={{textAlign:"center", marginTop:"-30px"}} className="normaling" >
           <Title title="About Prestige Finsbury Park"/>
           </div>
          <Description>
          <p style={{textAlign:"justify"}}>
          Prestige Finsbury Park is the most awaited residential town coming_up in North Banaglore,
           KIADB area, Just right adjacent to the Aerospace and Hardware Park. 
           The Prestige Finsbury is close to Kempedowda International Airport, Devanahalli.
            The north Bangalore is the New Launch hot and serious property investement where you wanna be. 
            It comprises of all the needs from Quality schools to luxurious Malls. Prestige Finsbury is the new launch and it is in the heart of banglore, 
            so the property is becoming sensation by it name and it's locality. Prestige Finsbury park has the good connectivity to all the famious destinations of Bangalore by the wide and well Laid Outer-Ring-Road. 
          It also has a very good connectivity to Bellary Road.
        </p>
        </Description>
        <hr/>
        <Overview/>
        <hr/>
        <ConfigurationPart/>
        <hr/>
        <Gallery/>
        <hr/>
        <Amenities/>
        <hr/>
        <TabsContainerOne/>
        <hr/>
        
        <LocationPart/>
         
          </div>
       
           <Footer/>
          </div>
       
    )
}
