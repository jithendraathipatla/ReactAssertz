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
            <SEOComponent title="Concorde Auriga Gallery | Auriga gallery | Concorde Auriga" des="In this page you will be able to see the all Gallery of Concorde Auriga starting from interior to the Floor Plan. You will be able to see all the Information about the Flooor plan, Master Plan and then the Images of Interiors and Exterior Parts of Concorde Auriga"/>
            <Navbar/>
            <SideMenu/>
            <div className="box">
            <div style={{paddingTop:"10vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title="Auriga Gallery"/>
            </div>
            <Description>
            <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Gallery: When Heading Through Investment Decisions, The Prominent Thing. Individuals Are Often Uncertain About Whether To Buy A Property From An Existing Area Or A New One. Individuals Are Urged To Prefer Investing In Developing Sites, Existing Leading Sites. Since Rates Are Marginal In Developing Markets, There Is Room For Development With Regard To Land Value. It Is A Threat To Invest In Developed Areas As The Region Has Reached The Peak. Until Jumping To Conclusions, A Site Visit Before Position Is Necessary. Welcome To <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Gallery
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