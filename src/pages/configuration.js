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
           <SEOComponent title="Prestige Properties | Prestige Constructions | Prestige Funsbury Park" des="This website Provides a whole lot of information on the Prestige Funsbury Park Property. You will find about Total land area the Prestige Funsbury Park has come-up with , number of Uits that it owns and many more"/>
           <Navbar/>
           <SideMenu/>
           <div className="box">
         
           <div style={{paddingTop:"7vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title="FinsBury Park Configuration"/>
           </div>
           <Description> <p>
        
         </p>
         </Description>
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