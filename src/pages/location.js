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
        <SEOComponent title="Concorde Auriga | location | 2 BHK Apartments" des="This page lets you know about the concorde Auriga location. Visiting this page will provide the information about the nearby schools, metro and malls surrounding this project"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Auriga Location"/>
        </div>
        <Description>
        
        <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Location Old Madras Bombay Trunk Rd, Medahalli,Bangalore, Karnataka 560049.Old Madras Road, is the best spot to Investin Real home since it has effectively available to the IT organizations airterminal and zone resembles White-Field, Sarjapur, Marathalli, Indiranagar,MG Road, and Hebbal and so on What's more, contrasted with differentareas, the valuing in OMR is reasonable for first home purchasers andInvestors. Truly you have alternatives like <a href="http://concordeauriga.org.in/">Concorde Auriga</a> condo whereyou can purchase for end utilize or Invest on rentals or resale.        </Description>
       </div>
           <div>
            <Location/>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default location;