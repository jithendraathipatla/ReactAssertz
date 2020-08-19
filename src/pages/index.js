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
import SideImage from '../Imagesa/Images/prestige-waterford-banner.jpg';
import HighlightForm from '../Components/HighlightForm';
import NewSection from '../Components/NewSection';


export default () => {
    return(
        <div>
        <div className="backgroundSlider">
          <SEOComponent title="Prestige Waterford | Whitefield,Bangalore | ITPL| Brochure | Price" des=" Prestige Waterford is an Upcoming project by Prestige Group at Bangalore. Get the updated Details of Prestige Waterford price, review, Location, and Contact Us Booking Assistance"/>
          <NavBar/>
          <div className="scroll-downs">
          <div className="mousey">
          <div className="scroller">
          </div>
          </div>
          </div>
          <div className="slider">
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
           <Title title="About Prestige  Waterford"/>
           </div>
           <div className="imageBesideContent">
           <div>
           <img src={SideImage} alt="Prestige Group" style={{height:"270px", paddingLeft:"20px"}}/>
           </div>
           <div>
          <Description>
          <p style={{textAlign:"justify"}}>
          Prestige Group presents Prestige Waterford at Whitefield,a flourishing suburb of Bangalore. Made by the best of extravagances, this milestone will presently wake up at the Whitefield.It is an upcoming new residential project located in Whitefield Bangalore. And Locations is Pattandur Agrahara, Whitefield, Bangalore, Karnataka 560066.It is construction by Prestige Group which is one of the top real-estate firms of the country with projects spread across the cities of India.It Also includes a clubhouse, fully equipped gymnasium, swimming pool, multi-purpose hall, 24/7 Security and much more.
 
Prestige Waterford comes with smartly designed homes and ample space that is utilized to give you more in life. And there will be the best International Schools, work places, Quality Health Care Facilities, Shopping Malls, Hotels and Restaurants and much more. 
Achievements of Prestige Group which are worth mention below:- i) Prestige Group has been commemorated with India’s most trusted brand 2015 award at Hotel Leela, ii)Mumbai by IBC Info Media Corp, USA, in association with the International brand council. And many more Awards.
        </p>
        </Description>
        </div>
        </div>
        <hr/>
        <Overview/>
        <hr/>
        <div className="configurationimage">
        <ConfigurationPart/>
        </div>
        <hr/>
        <Gallery/>
        <hr/>
        <Amenities/>
        <hr/>
        <TabsContainerOne/>
        <hr/>
        <NewSection/>
        <LocationPart/>
         
          </div>
       
           <Footer/>
          </div>
       
    )
}
