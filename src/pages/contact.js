import React from 'react';
import Navbar from '../Components/NavBar';
import {css} from '@emotion/core';
import SEOcomponent from '../Components/SEO';

const ContactUs = () => {
    return (
        <div>
        <SEOcomponent title="About Prestige Constructions"/>
          <Navbar/>
        <div css={About}>
          <div css={Main}>
           <h1>Contact Prestige Constructions</h1>
          </div>
          <div css={Text}>
            <h2>For any details related to properties by Prestige group email Us
             <br/>
             <br/>
             <h3>livexcellence1@gmail.com</h3>
            </h2>
          </div>
        </div>
        </div>
    );
};

const About = css`
  margin:10vh 30px;
`

const Text = css`
   position: absolute;
   margin:30px;
   text-align:center;
   color:black;
   box-shadow:0px 0px 8px 4px rgba(0,0,0,0.5);
   height:63vh;
   width: 87%;
   border-radius: 15px;
   background: white;
   margin-top: -30vh;
   padding:30px;
   @media(max-width:600px){
    margin-top: -22vh;
    height: auto;
    width: 57%;
    h3{
     font-size:14px;
    } 
   }
`
const Main = css`
background: linear-gradient(-45deg, #826424, #d4af37 ,#826424,#d4af37);
height:40vh;
text-align:center;
color:white;
position:relative;
 padding-top:20px;
 h1{
text-shadow:0px 4px 20px rgba(0,0,0,0.1);
 }
 @media(max-width){
    width: 61%;
    border-radius: 15px;
    background: white;
    margin-top: -25vh;
    padding: 30px;
 }
`

export default ContactUs;