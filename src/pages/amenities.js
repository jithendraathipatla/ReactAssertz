import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Description from '../Components/Description';
import Titleabc from '../Components/Title';
import Footer from '../Components/Footer';
import Amenities from '../Components/Amenities';
import SideMenu from '../Components/SideMenu';

const amenities = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Amenities | Assertz Marq Amenities"/>
        <Navbar/>
           <div className="box" style={{paddingTop:"10vh"}}>
           <div className="card">
            <div style={{textAlign:"center"}}>
            <Titleabc title="Assertz Marq Amenities"/>
            </div>
            <Description>Assertz marq Amenities Goes Here</Description>
            </div>
           
           <SideMenu/>
           <hr/>
           <Amenities/>
            <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default amenities;