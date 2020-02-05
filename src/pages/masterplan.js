import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';

const masterplan = () => {
    return (
        <div>
        <SEOComponent title="Assertz MArq 2.0 Master Plan | Master Plan"/>
        <Navbar/>
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq MasterPlan"/>
        </div>
        <Description>Assertz marq MasterPlan Goes Here</Description>
       </div>
            <Location/>
            <Footer/>
        </div>
    );
};

export default masterplan;