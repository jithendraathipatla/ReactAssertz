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
        <SEOComponent title="Sumadhura Aspire Aurum Location | Aspire Aurum - location | Aspire Aurum Apartments in Batrahalli" des="This page provides better understanding of the Assertz marq location. It gives the Information about the nearby ares and ten the nearby malls surrounding the Project "/>
        <Navbar/>
        <SideMenu/>
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="Aspire Aurum Location"/>
        </div>
        <Description>Sumadhura Aspire Aurum is coming at Tc Palya, Old Madras Road, Baglur Road, Bangalore. It is Just 4 Kilo meters away from Phoenix MarketCity, 7 Km away from ITPL and 10 KM away from Whitefield, Bangalore. And the best school in the area, DELHI PUBLIC SCHOOL, is just 13 KM Away.
        It is Heart of the city and then 10KM away from Marathahalli. Want to be away from traffic, then the proposed METRO is to your Rescue. The Metro will be well within your reach. It is 4KM away from the Project.
        <br/>
        Are you a Movie freak, we have got you covered. The  all big GOPALAN MAll is 6KM away and it is well in reach.
        Some Key Destinations takeaways that you might want to Consider:
        I. 6 KM from RMZ Infinity.
        II. 8 KM from Indiranagar.
        III. 11 KM from MG Road.
        IV. 12 KM from CBD
        V. 13KM from HEBBAL and
        VI. 15Km from Manyatha Tech Park.
        </Description>
       </div>
           <div>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default location;