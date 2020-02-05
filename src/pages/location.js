import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';

const location = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Gallery | Assertz Marq"/>
        <Navbar/>
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Location"/>
        </div>
        <Description>Assertz marq Location Goes Here</Description>
       </div>
            I am from the location Part
            <Location/>
            <Footer/>
        </div>
    );
};

export default location;