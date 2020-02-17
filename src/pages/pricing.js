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
        <SEOComponent title="Assetz Sun And Sanctum Starting Price | Best Apartments in Old Madras Road, Bangalore" des="Are you Curious to know about the offers and benifits the Assetz Sun And Sanctum Provides ?, Then, visit the website to get all the data related to 3BHK and 4BHK starting Prices that Assetz Sun And Sanctum has to offer."/>
        <Navbar/>
        <SideMenu/>
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Sun And Sanctum Pricing"/>
        </div>
        <Description>Assetz Sun And Sanctum Pricing details are shown below, The Assetz Sun And Sanctum Comprises of 1,2 & 3BHK Apartments. If you want to get in touch with us submit any of the forms and will be in your ear's as soon as possible.
        <br/>
        We have designed each and every flat in a way that it will provide you the utmost pleasure. We have achieved this feat by carefully planning and our Designer Engineers have
        played their vital part in achieving a world class design and a well crafted layout.
        Not only do you get the feeling that I am in a paradise, but you will enjoy your stay each and every single second.
        The bliss you will get inside the Apartments is incompatible will the bliss you get it anywhere else. 

        </Description>
        </div>

       <PricingComponent/>
           <hr/>
            <Location/>
        <Footer/>
        </div>
    );
};

export default pricing;