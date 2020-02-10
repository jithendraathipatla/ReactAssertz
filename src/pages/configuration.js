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
           <SEOComponent title="flats in whitefield | assetz property" des="This website Provides a whole lot of information on the Assertz Marq 2.0 Property. You will find about Total land area the Assertz Marq 2.0 has come-up with , number of Uits that it owns and many more"/>
           <Navbar/>
           <SideMenu/>
           <div className="box">
           <div className="card">
           <div style={{paddingTop:"10vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title="FinsBury Park Configuration"/>
           </div>
           <Description> <p style={{textAlign:"justify"}}>
          
           <a href="http://assetzmarq.org/">Assetz Marq 2.0</a> is a brand new residential project by Assetz homes. This project has Township concept in which they are giving schools, Retails,
           commercial space and has luxurious features and excellent connectivity to all the major cities and is located at <a href="http://concordeauriga.org.in/">Whitefield</a>, Bangalore. This project
           spread over 22 Acres of land in which they are coming up with 3 phases,phase one is already handed over to the happy customer’s and phase 2 is under construction.
           <br/>                      
           <br/>
         </p>
         </Description>
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