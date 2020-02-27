import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Overview from '../Components/StatefulOverview';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';


const overview = () => {
    return (
        <div>
        <SEOComponent title="Prestige  Waterford | Area | Apartments" des="This Page deals with the various related details of the Prestige Waterford Apartments in Whitefield. Visiting this page will give you an overall idea about the Area, Number of towers, Number of Blocks, Unit Variants in which the Waterford Apartments are coming_up."/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"7vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title=" Waterford Overview"/>
          </div>
          <Description>
          The page will treat you with the overall overview about Prestige Waterford Apartments in Bangalore.The below are the few details about the Prestige waterford Apartments. The details given are about the total land Area in which the apartments are coming up, The number of floors that Prestige Waterford Apartments are going to be, Total number of towers that Prestige Waterford Apartments are going to be there and then the Possession of the Apartments.

          This Page will also tells you about the Pocession date of the Prestige Waterford Apartments, Whitefield, Bangalore          </Description>
          </div>
          <hr/>
            <Overview/>
           <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default overview;