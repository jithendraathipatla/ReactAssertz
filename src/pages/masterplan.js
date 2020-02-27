import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';
import MasterplanImage from '../Components/MasterPlan';
import '../GlobalStyles/styles.css';

const masterplan = () => {
    return (
        <div>
        <SEOComponent title="Prestige  Waterford | Master Plan | Floor Plan" des="
        You will be shown all the images related to Master Plans of Prestige Waterford Apartments. Once after visiting this webpage you will have the best idea about the master plan of Prestige Waterford Apartments Bangalore."/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"7vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title=" Waterford MasterPlan"/>
        </div>
        <Description>Prestige Waterford Apartments are beautifully designed apartments by the Prestige Constructions group. As all we know how much well the Prestige group is at its quality.
        So apart from quality, Prestige Waterford Apartments assures us the best in the world designs by the experts in the field of Civil Engineering.
        
        Once you visit this beautifully planned Venture we are sure that you will fall in love with this beautiful creation by Prestige Constructions. So if you are looking for an apartment or trying out any investment destinations then the Prestige waterford apartments by the Prestige Broup in the Area of Whitefield, Bangalore will be Your Right Choice.</Description>
       </div>
        <hr/>
       <div style={{textAlign:"center"}}>
       <Titleabc title="Marq Master Plan"/>
       </div>
       <div className="masterPlan">
       <MasterplanImage/>
       </div>
        <hr/>
        <Location/>
        </div>
        <Footer/>
        </div>
    );
};

export default masterplan;