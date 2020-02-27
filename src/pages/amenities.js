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
        <SEOComponent title="Prestige Waterford | Amenities | Top Amenities Apartments in Whitefield" des="By visiting this website you will get to know about the amenities that prestige waterford will be offering. This webpage also helps you to understand about various amenities that you will be provided with in prestige waterford apartments"/>
        <Navbar/>
           <div className="box" style={{paddingTop:"10vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title=" Waterford Amenities"/>
            </div>
            <Description>Prestige Waterford offers an all-encompassing way of life to its occupants and will accompany a completely prepared clubhouse, pool, best in class center, running, and cycling tracks, all day, everyday Security and some progressively, best of International Schools, working environments, Quality Health Care Facilities, Shopping Malls, Hotels and Restaurants inside prompt span adds to the day by day Quality of Life.
            </Description>
        
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