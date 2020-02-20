import React from "react";
import {css} from '@emotion/core';
import NavBar from '../Components/NavBar';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import Overview from '../Components/StatefulOverview';
import ConfigurationPart from '../Components/Configration';
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


export default () => {
    return(
        <div >
        <div className="backgroundSlider">
          <SEOComponent title="Sumadhura Aspire Aurum | Aspire Aurum | Whitefield | Kadugodi " des="This webpage provides all the Information on Sumadhura Aspire Aurum . You will be able to see all the related Information on Sumadhura Aspire Aurum [Hyde, Regent], starting from Overview of the Project to the Location."/>
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
           <Footer/>
          </div>
       
    )
}


const someStyling = css`
 display:flex;
 margin:10px;
 @media(max-width: 600px) {
  display:block;
}
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
    font-size:small;
  }
  span{
   margin-top:2px;  
  }
}`

const second = css`
 flex:5;
 border: 1px solid #eee;
 padding:0px 22px 20px 25px;
`