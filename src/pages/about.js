import React from 'react';
import Navbar from '../Components/NavBar';
import {css} from '@emotion/core';
import SEOcomponent from '../Components/SEO';

const amenities = () => {
    return (
        <div>
        <SEOcomponent title="About Prestige Constructions"/>
          <Navbar/>
        <div css={About}>
          <div css={Main}>
           <h1>About Prestige Constructions</h1>
          </div>
          <div css={Text}>
             <span>
             Over the last decade, the Prestige Group has firmly established itself as one of the leading and most successful developers of real estate in India by imprinting its indelible mark across all asset classes. Founded in 1986, the group’s turnover is today in excess of Rs 3518 Cr (for FY 15); a leap that has been inspired by CMD Irfan Razack and marshaled by his brothers Rezwan Razack and Noaman Razack. Having completed 210 projects covering over 80 million sq ft, currently the company has 53 ongoing projects spanning 54 million sq ft and 35 upcoming projects aggregating to 48 million sq ft of world-class real estate space across asset classes. In October 2010, the Prestige Group also successfully entered the Capital Market with an Initial Public Offering of Rs 1200 cr.
            <br/>
            <br/>
             The company has diversified over time into a number of related/non-related services, each of them spearheaded by individuals with adroit capacity. Services are as varied as the interior designing done by Morph Design Company (MDC) and the redefinition of elegance and suave in men’s formal dressing by Prestige Fashions (P) Ltd. They are also the only developers in South India to boast of such a widely diverse portfolio covering the residential, commercial, retail, leisure and hospitality segments.
             <br/>
             <br/>
             Now with 205 landmark developments across the city, the company has extended its expertise to major cities across South India including Chennai, Hyderabad, Kochi, Mysore, Mangalore and Goa. Giving each city an unparalleled experience with landmark malls on the lines of ‘The Forum’, large townships, tech parks, hotels, luxury villas, and SEZs. The company already has several successful completed and ongoing projects in Chennai to its credit, spanning the commercial and retail segments. Prestige Cyber Towers, Prestige Polygon and Prestige Palladium are three completed commercial developments, which have received an overwhelming response. The Forum Vijaya Mall, Chennai’s largest mall was unveiled in 2013. The Prestige Group launched Chennai’s first township project – a Rs. 1,000 crore development in partnership with the Rattha Group in 2012. They also launched Prestige Silver Springs – the first-of-its-kind luxury villas in the city in 2013.
            
             </span>
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
   text-align:justify;
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
`

export default amenities;