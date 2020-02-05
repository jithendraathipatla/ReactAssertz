import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';

const location = () => {
    return (
        <div>
        <SEOComponent title="Assertz Marq 2.0 Gallery | Assertz Marq"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div className="card">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Location"/>
        </div>
        <Description>Assertz marq Location Goes Here</Description>
        </div>
       </div>
           
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default location;