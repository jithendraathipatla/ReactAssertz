import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Overview from '../Components/StatefulOverview';
import Description from '../Components/Description';


const overview = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Overview"/>
        <Navbar/>
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Overview"/>
        </div>
        <Description>Assertz marq Overview Goes Here</Description>
       </div>
            <Overview/>
            <br/>
            <br/>
            <Location/>
            <Footer/>
        </div>
    );
};

export default overview;