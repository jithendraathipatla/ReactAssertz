import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Description from '../Components/Description';
import Titleabc from '../Components/Title';
import Footer from '../Components/Footer';
import Amenities from '../Components/Amenities';

const amenities = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Amenities | Assertz Marq Amenities"/>
            <Navbar/>
           <div style={{paddingTop:"10vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title="Assertz Marq Amenities"/>
            </div>
            <Description>Assertz marq Amenities Goes Here</Description>
           </div>
           <Amenities/>
            <Location/>
            <Footer/>
        </div>
    );
};

export default amenities;