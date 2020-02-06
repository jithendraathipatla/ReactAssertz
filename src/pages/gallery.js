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
            <SEOComponent title="Assertz Marq Gallery | Assertz Marq 2.0 Gallery | assetz marq"/>
            <Navbar/>
            <SideMenu/>

            <div className="box">
            <div className="card">
            <div style={{paddingTop:"10vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title="Assertz Marq Gallery"/>
            </div>
            <Description>Assertz marq Gallery Goes Here</Description>
           </div>
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