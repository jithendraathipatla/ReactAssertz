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
        <SEOComponent title="Prestige  Waterford | starting Price | Price" des="
        This webpage will treat you with the offers and then the Benefits that you will be getting as a pre_Launch Offer on Prestige Waterford Whitefield Apartments in Bangalore."/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"7vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title=" Waterford Pricing"/>
        </div>
        <Description>Want to get the Most of the Prestige Waterford Apartments, Then you are in the Right Place. You want to get to know more about the offers and mostly take away the best benefits under the Pre_launch offer then, simply Get in touch with Us. You could get in touch with us by simply filling up the form or directly contacting us on the above given number.

        You will get to see all the pricing details of Prestige Waterford Apartments. Different apartments have different price ranges. Under the pre_launch offer you get to pay only one Percent GST and you avail good discounts under this pre_launch offer. So if you are someone who is looking for your Dream home in Whitefield Bangalore, then the Prestige Waterford Apartments in whitefield will be your Right choice.
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