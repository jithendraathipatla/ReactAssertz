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
            <SEOComponent title="Prestige FinsBury Park Regent Gallery | Prestige FinsBury Park Hyde Gallery | Prestige FinsBury Park" des="In this page you will be able to see the all Gallery of Prestige FinsBury Park starting from interior to the Floor Plan. You will be able to see all the Information about the Flooor plan, Master Plan and then the Images of Interiors and Exterior Parts of Prestige FinsBury Park"/>
            <Navbar/>
            <SideMenu/>
            <div className="box">
            <div style={{paddingTop:"7vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title="FinsBury Park Gallery"/>
            </div>
            <Description>Prestige FinsBury Park is a state-of-the-art residential assignment via Prestige homes. This undertaking has Township concept in which they're giving schools, Retails, industrial space and has pricey features and superb connectivity to all of the fundamental cities and is positioned at Baglur, Bangalore. This venture spread over 22 Acres of land in which they may be coming up with three phases,section one is already exceeded over to the glad client’s and segment 2 is underneath construction.</Description>
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