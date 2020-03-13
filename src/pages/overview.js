import React from 'react';
import Navbar from '../Components/NavBar';
import Location from '../Components/Location';
import SEOComponent from '../Components/SEO';
import Footer from '../Components/Footer';
import Titleabc from '../Components/Title';
import Overview from '../Components/StatefulOverview';
import Description from '../Components/Description';
import SideMenu from '../Components/SideMenu';


const overview = () => {
    return (
        <div>
        <SEOComponent title="Concorde Auriga | 3 Bhk Apartments in Bangalore " des="This page helps you to understand more on the Concorde Auriga. The website you will see will help you to get more informative on  Concorde Auriga"/>
        <Navbar/>
        <SideMenu/>
        <div className="box">
        <div style={{paddingTop:"10vh"}}>
        <div style={{textAlign:"center"}}>
        <Titleabc title="FinsBury Park Overview"/>
          </div>
           <Description>

           <a href="http://concordeauriga.org.in/">Concorde Auriga</a> is the new launch Property in Medahalli, near KR Puram Old Madras Road, Bangalore. The Property is spread across 5.2 Acer Land at Old Madras Road, Medahalli. This property has more than 500 units with 3 Towers and has G + 29 Floors. Amenities inside this Beautifully Crafted Project include Clubhouse, Landscaped Garden, Gymnasium, Swimming Pool, 24/7 Power Backup, Outdoor Sports Club, Children’s Play Area, Convention Hall, and with most of the vacant area dedicated to the Fresh and Natural Air. Beside this project you would have a beautiful lake, where you would be able to enjoy nature at its best in a vast city like Bangalore. The builders of this project are from concorde Group, they have designed this project in such a way that the sunlight will be available in all parts of the day and will have a good and quality air access to all the Residents of this beautifully planned Project.
           <br/>
           <a href="http://concordeauriga.org.in/">Concorde Auriga</a> is coming_up in an area where the city has access to Bangalore's best Schools, Parks, Clinic’s, Tech parks’s, Shopping Centers and IT work-spaces. On any given day one could reach these spaces within a short span of Time. Auriga has beautifully designed homes, where you would be able to see the lake view through the glass view, this view gives a lot of happiness to all the nature Lovers. What separates you from enjoying the bliss inside the Concorde Auriga is its possession. It is in its last leg before opening its gates to the fortunate customers.
<br/>
<br/>
Talking about the access to the famous parts of Bangalore, this project has access to all the parts of City. It is just 14.3 KM from the world famous MG Road Bangalore. The closest station from the Project is just 5.9 KM away. Want to reach the other parts of India through Airways? Then they have got you covered, the International Airport is just 13.2 KM away. The KR Puram Railway Station is Just nearby.
<br/>
This property is also in the Vicinity to reach all the hospitals in case of emergencies. Some of the hospitals to reach include Columbia Asia hospital, VIMS Hospital, Janapriya Hospital, MGA Hospital and Many more.Concorde Auriga has a beautiful Gallery. The Floor Plan and Master Plan are designed in such a way that it will win the hearts of every Customer wishing to buy their dream homes. You can review the property by just visiting the site. You could leave all of your details here for free sit visit.

          </Description>
          </div>
          <hr/>
            <Overview/>
           <hr/>
            <Location/>
            </div>
            <Footer/>
        </div>
    );
};

export default overview;