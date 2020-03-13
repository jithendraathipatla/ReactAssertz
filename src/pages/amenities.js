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
        <SEOComponent title="Concorde Auriga | Amenities | Top Amenities Apartments in Whitefield" des="This page is all about the aminities that you can Avail from the Concorde Auriga Apartments. You can also find more about the Concorde Auriga Project within the website"/>
        <Navbar/>
           <div className="box" style={{paddingTop:"10vh"}}>
            <div style={{textAlign:"center"}}>
            <Titleabc title="Auriga Amenities"/>
            </div>
            <Description> <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Specifications and Quality Are An Important Decision Of Assessing The Quality Of A Company.  <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Has Many Interweaved Facilities That Render It The Perfect Place To Stay In Luxury. The Services Are Designed Which Allows People To Have More Of Family Time And Commuting To Simple Public Requirements Or Far-Off Areas. This Includes Landscaped Gardens To Bring In Fresh Air To The House. Draw in Yourself In A Pollution-Free And Healthy Life Zone, As It Is Enveloped By Green Surroundings.
             <br/>
             <br/>
             <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Amenities Includes A Swimming Pool For All The Ages To Relax And Refresh From The Toil Of The Workplace, Spacious Children's Play Area Will Allow Your Children To Enjoy And Stop Worrying About It. The Project Includes A Well-Furnished Gymnasium To Improve Health Programs, Along With A Special Senior Citizen Built For The Old To Enjoy. A Library Was Designed To Fit In The Property And Preserve Your Learning Skills In Order To Plunge Your Head Into The World Of Literature And Information. A Clubhouse Is Set Up To Hold Monthly Or Daily Activities, Cafe To Spend Your Precious Time With Friends And Family, Recreational Facilities, Jogging Path, A Meditation Deck, And Beautifully Manicured Gardens To Give A Peaceful Feel So That People Can Enjoy Living In An Environment Friendly Atmosphere. The Area Is Well-Planned With Indoor Sports Such As TT, Chess, Carom, Air Hockey, And Foosball. The Business Center Is Designed For The Needs And Requirements Of Your Business. The Entire Enclave Is RCC Designed, To Relieve The Inhabitants From Regular Upkeep Of Maintenance.
 


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