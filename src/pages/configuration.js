import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import Configuration from '../Components/Configration';
import SideMenu from '../Components/SideMenu';

const configuration = () => {
    return (
        <div>
           <SEOComponent title="Prestige waterford | Reviews | Prcies" des="In this webpage you will be treated with the different sizes of apartments within the Prestige waterford Apartments. This page will also provide Information on the sizes of 1 BHk, 2 BHK and then 3 BHK sizes."/>
           <Navbar/>
           <SideMenu/>
           <div className="box">
         
           <div style={{paddingTop:"7vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title=" Waterford Configuration"/>
           </div>
           <Description>      
           The below table describes the sizes of different apartments inside the Prestige waterford Apartments. The corresponding sizes have corresponding Price Range. The Pricing of Prestige Waterford Apartments, Whitefild, Bangalore have calculated in such a way that it will be the most suitable and then the most affordable apartments in the area of Whitefield.
           <br/>
           If you are an investor and want to see your money multiply in the coming years then the Prestige Waterford Apartments is clearly one of the hottest destinations for your investment destination in the area of Whitefield.
           </Description>
           </div>
          
           <hr/>
          <Configuration/>
          <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default configuration;