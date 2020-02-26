import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Description from '../Components/Description';
import Configuration from '../Components/Configration';
import SideMenu from '../Components/SideMenu';

const configuration = () => {
    return (
        <div>
           <SEOComponent title="Prestige Properties | Prestige Constructions | Prestige  Waterford" des="This website Provides a whole lot of information on the Prestige  Waterford Property. You will find about Total land area the Prestige  Waterford has come-up with , number of Uits that it owns and many more"/>
           <Navbar/>
           <SideMenu/>
           <div className="box">
         
           <div style={{paddingTop:"7vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title=" Waterford Configuration"/>
           </div>
           <Description>      
               Bagalur Road is now one of the finest and rapidly developing region in the Bangalore North. Baglur is also equiped with all the facilities and properties from reputed gaints. Prestige  Waterford is located off Bagalur, which exactly is in Gummanahalli, of North Banglore. As the Prestige we are comitted to offer the best suited amenities to it's customers. Keeping every economic section in mind Prestige Finsbury is spreadind with luxurious 1,2,3 BHK Homes. So we reveal the most exiciting part, How much do you thisnk is the distance between the Prestige  Waterford to the Kempedowda International Airport ?, "It is just 13.2 Km". On any normal day it will be with in 20minutes travell from the Kempedowda International airport.
         </Description>
           </div>
          
           <hr/>
          <Configuration/>
          <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default configuration;