import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';
import MasterplanImage from '../Components/MasterPlan';

const masterplan = () => {
    return (
        <div>
        <SEOComponent title="Assertz MArq 2.0 Master Plan | Master Plan"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div className="card">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq MasterPlan"/>
        </div>
        <Description>Assertz marq MasterPlan Goes Here</Description>
        </div>
       </div>
       <hr/>
       <div>
       <MasterplanImage/>
       </div>
       <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default masterplan;