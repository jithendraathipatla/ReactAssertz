import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Overview from '../Components/StatefulOverview';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';


const overview = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Overview | Assertz builders | Assertz Properties" des="This page helps you to understand more on the Assertz Marq 2.0 Property. The website you will see will help you to get more informative on Assertz Marq 2.0"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div className="card">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Overview"/>
        </div>
        <Description>Assetz Marq 2.0 is a state-of-the-art residential assignment via Assetz homes. This undertaking has Township concept in which they're giving schools, Retails, industrial space and has pricey features and superb connectivity to all of the fundamental cities and is positioned at Whitefield, Bangalore. This venture spread over 22 Acres of land in which they may be coming up with three phases,section one is already exceeded over to the glad client’s and segment 2 is underneath construction.</Description>
        </div>
       </div>
       <hr/>
            <Overview/>
           <hr/>
           
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default overview;