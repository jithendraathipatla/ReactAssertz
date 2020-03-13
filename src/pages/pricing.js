import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import PricingComponent from '../Components/Costing';
import SideMenu from '../Components/SideMenu';

const pricing = () => {
    return (
        <div>
        <SEOComponent title="Concorde Auriga | Price | reviews" des="Are you Curious to know about the offers and benifits the Concorde Auriga Provides ?, Then, visit the website to get all the data related to 3BHK and 4BHK starting Prices that Concorde has to offer."/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Auriga Pricing"/>
        </div>
        <Description>
        Get Updated Concorde Auriga Prices and More, Regardless of whether you're On the SoftwareMarket or Buying a Coffee Pot, Finding the Best Price Is a Natural Part of the Purchase Decisionof Any Consumer. Value Concorde Auriga Is Affordable And Is In Line With The Option Of affordability Of The Consumer And Improved Living Standards In Surrounding Areas.Concorde Auriga Is The Best Choice For Luxury Hunters. Concorde Auriga Is An AttractiveInvestment For Wise Buyers Who Want To Own A Residence In Bangalore's GrowingCommercial Area, Medahalli KR Puram. Concorde Auriga Strives To Provide Its ProspectiveBuyers With The Finest And Comfortable Amenities. The Quality of Concorde Auriga Medahalli, With Rising Land Values Surrounding the Site. 
        Makes It Ideal To Buy The Property Now At The Pre-Launch Price.
        </Description>
        </div>
       <hr/>
       <PricingComponent/>
           <hr/>
            <Location/>
            </div>
        <Footer/>
        </div>
    );
};

export default pricing;