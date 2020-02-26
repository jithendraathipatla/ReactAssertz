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
        <SEOComponent title="Assertz Marq 2.0 Amenities | Assertz Marq Amenities | Top Amenities Apartments in Whitefield" des="This page is all about the aminities that you can Avail from the Assertz Marq 2.0 Apartments. You can also find more about the Assertz Marq 2.0 Projec within the website"/>
        <Navbar/>
           <div className="box" style={{paddingTop:"10vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title=" Waterford Amenities"/>
            </div>
            <Description>Assertz marq Amenities are the country's best. The Amenities you get inside the Assertz mark are the best in the bes. The Amenities inside the Apartments suit right from your Child to your parents.
            Inside It has a garden. The garden has many trees, the trees are well responsible for the quality air inside the Apartments. The Kids playing Area is designed in such a way that It will attract the kids to be there all day.
            The children won't get bored at all during their stay in the Ground allocated to children.
 
            The Assertz Marq is also responsible for not only the clean air, also it has a dedicated space of more than 60% to afford everything you need.
            The Property is guarded by security Personnel round the clock. Also, you will be able to withdraw the money from the ATM round the Clock.
            <br/>
            <br/>
            If you are an Elder person and You want to be away from the other one, trying to be calm, We have got you the Meditation Area, where you are free to meditate without any Disturbances.
            
            If there is any Party coming, you can enjoy the best free space that is allocated for Parties.The Property Comprises for Wifi facility round the clock, meanwhile the life is all about being Smart, the Wifi is covered with all over the area.
 
            The apartments are of smart Homes, If you step outside, we got you covered. Sensors inside your Apartments tracks your Moments and they will go into power saving modes whenever you are not there. So Freak in saving the energy we have got you covered.
 
            So Asserts Property is of all in one Bonanza that you have been waiting for.
 


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