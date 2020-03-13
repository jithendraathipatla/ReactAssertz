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
        <SEOComponent title="concorde Auriga | masterplan | floorplan" des="This page is all about the concorde Auriga Master Plan. This page will allow you to see a detailed view on Master Plan of Concorde Auriga  Property"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Concorde Auriga MasterPlan"/>
        </div>
        <Description>
          Get Updated <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Prices and More, Regardless of whether you're On the SoftwareMarket or Buying a Coffee Pot, Finding the Best Price Is a Natural Part of the Purchase Decisionof Any Consumer. Value <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Is Affordable And Is In Line With The Option OfAffordability Of The Consumer And Improved Living Standards In Surrounding Areas.Concorde Auriga Is The Best Choice For Luxury Hunters. Concorde Auriga Is An AttractiveInvestment For Wise Buyers Who Want To Own A Residence In Bangalore's GrowingCommercial Area, Medahalli KR Puram. Concorde Auriga Strives To Provide Its ProspectiveBuyers With The Finest And Comfortable Amenities. The Quality of Concorde AurigaMedahalli, With Rising Land Values Surrounding the Site. Makes It Ideal To Buy The PropertyNow At The Pre-Launch Price.
        </Description>
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
        </div>
        <Footer/>
        </div>
    );
};

export default masterplan;