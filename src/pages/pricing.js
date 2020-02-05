import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';

const pricing = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Price"/>
        <Navbar/>
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Pricing"/>
        </div>
        <Description>Assertz marq Pricing Goes Here</Description>
       </div>s
            I am from the pricing
            <Location/>
        <Footer/>
        </div>
    );
};

export default pricing;