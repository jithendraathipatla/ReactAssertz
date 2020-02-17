import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';
import MasterplanImage from '../Components/MasterPlan';
import '../GlobalStyles/styles.css';

const masterplan = () => {
    return (
        <div>
        <SEOComponent title="Assetz Sun And Sanctum Master Plan | Sun And Sanctum Master Plan| Sun And Sanctum in Old Madras road" des="This page is all about the Assetz Sun And Sanctum Master Plan. This page will allow you to see a detailed view on Master Plan of Assetz Sun And Sanctum  Property"/>
        <Navbar/>
        <SideMenu/>
        <div style={{paddingTop:"7vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Sun And Sanctum MasterPlan"/>
        </div>
        <Description>Assetz Sun And Sanctum is a state-of-the-art residential assignment via Assetz homes. This undertaking has Township concept in which they're giving schools, Retails, industrial space and has pricey features and superb connectivity to all of the fundamental cities and is positioned at Baglur, Bangalore. This venture spread over 22 Acres of land in which they may be coming up with three phases,section one is already exceeded over to the glad client’s and segment 2 is underneath construction.</Description>
       </div>
        <hr/>
       <div style={{textAlign:"center"}}>
       <Titleabc title="Marq Master Plan"/>
       </div>
       <div className="masterPlan">
       <MasterplanImage/>
       </div>
        <hr/>
        <Location/>
        <Footer/>
        </div>
    );
};

export default masterplan;