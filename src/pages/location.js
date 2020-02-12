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
        <SEOComponent title="Prestige FinsBury Park - Hyde Location | Prestige FinsBury Park - Regent location | Prestige FinsBury Park" des="This page provides better understanding of the Assertz marq location. It gives the Information about the nearby ares and ten the nearby malls surrounding the Project "/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"7vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="FinsBury Park Location"/>
        </div>
        <Description>Prestige FinsBury Park is at Baglur Road, Bangalore. It is very near to WhiteField, Bangalore. So, the Apartments are easily commutable to all the parks and hubs in Bangalore. It is in the center for all of the IT Hubs Bangalore is most famous for. 40 minute Journey away from Manyata-tech-park and 30 Minute away journey from Bagmane Tech-park
        It connects all the parts of the city from end to end. On any normal traffic day you will reach the destination without any hard toiled work.
        </Description>
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