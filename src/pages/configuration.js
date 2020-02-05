import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import Configuration from '../Components/Configration';

const configuration = () => {
    return (
        <div>
           <SEOComponent title="Assertz Marq 2.0 Configuration | Assertz Marq Configuration"/>
           <Navbar/>
           <div style={{paddingTop:"10vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title="Assertz Marq Configuration"/>
           </div>
           <Description>Assertz marq Configuration Content Goes Here</Description>
          </div>
           
          <Configuration/>
            <Location/>
            <Footer/>
        </div>
    );
};

export default configuration;