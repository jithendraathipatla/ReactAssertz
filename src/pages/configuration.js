import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import Configuration from '../Components/Configration';
import SideMenu from '../Components/SideMenu';

const configuration = () => {
    return (
        <div>
           <SEOComponent title="Assertz Marq 2.0 Configuration | Assertz Marq Configuration"/>
           <Navbar/>
           <SideMenu/>
           <div className="box">
           <div className="card">
           <div style={{paddingTop:"10vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title="Assertz Marq Configuration"/>
           </div>
           <Description>Assertz marq Configuration Content Goes Here</Description>
           </div>
          </div>
           <hr/>
          <Configuration/>
          <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default configuration;