import React from "react";
import {css} from '@emotion/core';
import { FaRegDotCircle } from 'react-icons/fa';
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
import SectionTwo from '../Components/SecondSection';
import SectionThree from '../Components/ThirdSection';
import SectionFour from '../Components/FourthSection';
import ExtraFeatures from '../Components/ExtraFeatures';


export default () => {
    return(
        <div >
        <div className="backgroundSlider">
          <SEOComponent title="Assetz Sun And Sanctum | Sun And Sanctum | Assertz constructions " des="This webpage provides all the Information on Assetz Sun And Sanctum . You will be able to see all the related Information on Assetz Sun And Sanctum [Hyde, Regent], starting from Overview of the Project to the Location."/>
          <NavBar/>
          <div className="slider">
          <Slider/>
          <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
          </div>
          <div className="backgroundForm">
          <HighlightForm/>
          </div>
          <div className="backgroundFormTwo">
          <HighlightFormTwo/>
          </div>
          </div>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SideMenuBar/>
          <br/>
          <div style={{textAlign:"center", marginTop:"-30px"}} className="normaling" >
           <Title title="About Assetz Sun And Sanctum"/>
           </div>
          <Description>
          <p style={{textAlign:"justify"}}>
          Assetz Sun And Sanctum is the most awaited residential town coming_up in North Banaglore,
           KIADB area, Just right adjacent to the Aerospace and Hardware Park. 
           The Assetz Finsbury is close to Kempedowda International Airport, Devanahalli.
            The north Bangalore is the New Launch hot and serious property investement where you wanna be. 
            It comprises of all the needs from Quality schools to luxurious Malls. Assetz Finsbury is the new launch and it is in the heart of banglore, 
            so the property is becoming sensation by it name and it's locality. Assetz Sun And Sanctum has the good connectivity to all the famious destinations of Bangalore by the wide and well Laid Outer-Ring-Road. 
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
        <div style={{textAlign:"center"}}>
        <Title title="Extra Features San And Sanctrum Offers"/>
        </div>
        <div css={someStyling}>
        <div css={first}>
        <div style={{textAlign:"center"}}>
         <Title title="Stand-out Amenities"/>
        </div>
          <ul>
           <li><FaRegDotCircle/> <span>Carbon Healing</span></li>
           <li><FaRegDotCircle/><span>Smart Homes</span></li>
           <li><FaRegDotCircle/><span>Fresh Air</span></li>
           <li><FaRegDotCircle/><span>Ground Water Recharge</span> </li>
           <li><FaRegDotCircle/> <span>Rain water Harvesting</span></li>
          </ul>
        </div>
        <div css={second}>
        <ExtraFeatures/>
        </div>
        </div>
        <TabsContainerOne/>
        <hr/>
        <LocationPart/>
           <Footer/>
          </div>
       
    )
}


const someStyling = css`
 display:flex;
 margin:10px;
`

const first = css`
 flex:3;
 border: 1px solid #eee;
 li{
  margin-bottom:20px;
  margin-left:25%;
  margin-top:10%;
  color:#19544b;
  svg{
    margin-right:5px;
  }
  span{
   margin-top:2px;  
  }

 }

`

const second = css`
 flex:5;
 border: 1px solid #eee;
 padding:10px 22px 20px 25px;
`