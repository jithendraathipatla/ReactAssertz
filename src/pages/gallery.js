import React from 'react';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Location from '../Components/Location';
import GalleryComponent from '../Components/Gallery';
import SEOComponent from '../Components/SEO';
import Description from '../Components/Description';
import Titleabc from '../Components/Title';
import SideMenu from '../Components/SideMenu';


const gallery = () => {
    return (
        <div>
            <SEOComponent title="Prestige Waterford | Gallery | Interior | Exterior" des="In this page you will get an idea about the interior Part, exterior Part, Floor Plan and Master Plan of the Prestige Waterford Apartments Whitefield. You will be shown all the floor plans master Plans in the Prestige waterford Apartments."/>
            <Navbar/>
            <SideMenu/>
            <div className="box">
            <div style={{paddingTop:"7vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title=" Waterford Gallery"/>
            </div>
            <Description>
            Prestige Smart Kitchen has once again been awarded the 'Best franchisor of the year for Home/Home products' award by Franchisee India in an event held at Hotel Lalit, New Delhi on 19th Oct 2015. India's Most popular and promising Brands 2014 - Real Estate.D and damp; B Corporate Awards Top Indian Company 2014 - Real Estate Prestige Group.CNBC Awaaz Real Estate Award 2013.The best of International Schools, work environments, Quality Health Care Facilities, Shopping Malls, Hotels and Restaurants inside prompt sweep adds to the everyday Quality of Life.
            </Description>
            </div>
            <hr/>
            <GalleryComponent/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default gallery;