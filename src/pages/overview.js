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
        <SEOComponent title="Assertz Marq 2.0 Overview | Assertz builders | Assertz Properties"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div className="card">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Assertz Marq Overview"/>
        </div>
        <Description>Assertz marq Overview Goes Here</Description>
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