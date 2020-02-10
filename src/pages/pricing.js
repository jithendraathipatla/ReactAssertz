import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import PricingComponent from '../Components/tabsforCost';
import SideMenu from '../Components/SideMenu';

const pricing = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Price | Starting Price of an Assertz Property | Best Apartment in Whitefield, Bangalore" des="Are you Curious to know about the offers and benifits the Assertz Marq 2.0 Provides ?, Then, visit the website to get all the data related to 3BHK and 4BHK starting Prices that Assertz Marq has to offer."/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div className="card">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Pricing"/>
        </div>
        <Description>Assertz marq Pricing details are shown below, The Assertz Marq 2.0 Comprises of 3BHK and 4BHK Apartments. The starting Price of a 3BHk apartment is 90 Lakh, whereas the starting price of a 4BHK apartment is 1.40 Crore. If you want to get in touch with us submit any of the forms and will be in your ear's as soon as possible.
        <br/>
        We have designed each and every flat in a way that it will provide you the utmost pleasure. We have achieved this feat by carefully planning and our Designer Engineers have
        played their vital part in achieving a world class design and a well crafted layout.
        Not only do you get the feeling that I am in a paradise, but you will enjoy your stay each and every single second.
        The bliss you will get inside the Apartments is incompatible will the bliss you get it anywhere else. 

        </Description>
        </div>
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