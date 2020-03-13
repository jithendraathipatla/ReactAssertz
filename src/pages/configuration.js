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
           <SEOComponent title="Concorde Group | Concorde Builders  | Concorde Auriga" des="This website Provides a whole lot of information on the concorde Auriga Property. You will find about Total land area the concorde Auriga has come-up with , number of Uits that it owns and many more"/>
           <Navbar/>
           <SideMenu/>
           <div className="box">
         
           <div style={{paddingTop:"10vh"}}>
           <div style={{textAlign:"center"}}>
           <Titleabc title="Auriga Configuration"/>
           </div>
           <Description>      
            <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Apartments Is Thoughtfully Designed In Manner It Can Take Care Of Every Family Needs, Be It Small Or Large. Today When We Have A First Job In It Its Mostly Located In Whitefield Or ITPL And It Would Be A First Job Of A Fresher. Lease Is Going High Day By Day With No Value Of Money. So Here Concorde Group With Its New Project  <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Apartments Old Madras Road KR Puram Has Done Its Best Designed To Accommodate A Fresher Who Has Joined Into His New Job And Will Be Very Soon Looking To Buy A New Home. 
            <br/>
            <br/>
            <a href="http://concordeauriga.org.in/">Concorde Auriga</a> Apartments On Old Madras Road Has Come With Compact 2 Bhk Which Will Easily Accommodate Is Luxury Living In 2 BhkWhere He Is Not Worried If He Has Guest Coming To His Home. He CanAccommodate Them Easily And The Price Is Such That Buy The Time TheProperty Is Completed He Would Be Comfortably Paying His Emi's With NoAdditional Burden To Him. Approaching People Who Are Already Settled And Looking For Larger 2 Bhk Home In Old Madras Road, Will Have TheOption To Choose Amongst The Larger Variant Available In Bhk. FamiliesAre Growing As Well Property Prices Are, Where There Is Need Of AndAdditional Room For Kid's Or A Study Room, Here We Provide You To GoWith An Additional Option Of 2.5 Bhk Apartment At Auriga.
            
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