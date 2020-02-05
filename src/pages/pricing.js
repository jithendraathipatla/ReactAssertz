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
        <SEOComponent title="Assertz Marq 2.0 Price"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div className="card">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Pricing"/>
        </div>
        <Description>Assertz marq Pricing Goes Here</Description>
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