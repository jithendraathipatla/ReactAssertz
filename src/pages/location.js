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
        <SEOComponent title="Prestige Waterford | location | in whitefield" des="This page is about the Prestige Waterford Location.Prestige Waterford Apartments are Coming_up in the Whitefield Location. The information on this page is all about the prestige waterford apartments location details, where it is coming up and where exactly in Bangalore it will be."/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"7vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title=" Waterford Location"/>
        </div>
        <Description>Prestige Waterford is an up and coming extravagance private task situated in Whitefield, a flourishing suburb of Bangalore. Prestige Waterford is a mix of extravagance, comfort, and security. It is an insightfully structured advancement by Prestige Group that will assist the inhabitants with nurturing their psyche, body, and soul. Regarded inhabitants of this venture will get a choice to look over an assortment of homes where they can appreciate sees and unwind in the tranquility of the region itself. This gated network accompanies keenly structured homes and sufficient space that is exquisitely used to give you more throughout everyday life. Being situated in created neighborhoods, your new home is in the region of shops, shopping centers, schools, and workplaces. Glory Waterford is the ideal private goal for you and your family.</Description>
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