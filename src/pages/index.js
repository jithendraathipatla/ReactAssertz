import React from "react";
import NavBar from '../Components/NavBar';
import Title from '../Components/Title';
import '../Styles/globalstyles.css';
import Footer from '../Components/Footer';
import Overview from '../Components/StatefulOverview';
import ConfigurationPart from '../Components/Configration';
import Description from '../Components/Description';
import Gallery from '../Components/Gallery';
import Costing from '../Components/Costing';
import LocationPart from '../Components/Location';
import Amenities from '../Components/Amenities';
import ButtonComponent from '../Components/Button';
import SEOComponent from '../Components/SEO';


export default () => {
    return(
        <div>
          <SEOComponent title="Assertz Marq 2.0 | Assertz Marq"/>
          <NavBar/>
          <div className="box">
          <div className="card">
          <Title title="About Assertz Marq 2.0"/>
          <Description>
          <p style={{textAlign:"justify"}}>
          <a href="http://assetzmarq.org/">Assetz Marq</a> has set up itself as one of the main names among the Builders and
          engineers in Bangalore. They have assembled two world-class IT tech
          stops in Bangalore: Vrindavan Tech Town (presently International safe
          have Tech Town) - India's first Platinum LEED guaranteed IT SEZ, and
          Worldwide Innovation Park.Assetz Marq 2.0 is fresh out of the box new private venture by Assetz homes. Assetz Marq is exceptionally extensive and has sumptuous highlights. This undertaking has great availability to all the significant urban areas and is situated in the core of Whitefield. This venture is developed in 22 acres of open land with 297 units with G+28 Floors. The Assetz Marq area is on the Main Road of Whitefield. Assetz Marq 2.0 value is entirely moderate to every one of the segments of the individuals. It has a unique mix of the private and business spaces found in Kannamangala on the Hoskote - Whitefield fundamental street, Bangalore that is all around related to the genuine avenues, social and business establishments. These apartment suites have 4 squares and are offering 2BHK and 3BHK private pads nearby the confined houses in sensible costs. 
          <br/>                      
          <br/>
          <a href="http://assetzmarq.org/">Assetz Marq 2.0</a> is a brand new residential project by Assetz homes. This project has Township concept in which they are giving schools, Retails,
          commercial space and has luxurious features and excellent connectivity to all the major cities and is located at <a href="http://concordeauriga.org.in/">Whitefield</a>, Bangalore. This project
          spread over 22 Acres of land in which they are coming up with 3 phases,phase one is already handed over to the happy customer’s and phase 2 is under construction.
          <br/>                      
          <br/>
          Phase 2 has 297 units with G+28 Floors and it includesjogging track, Gymnasium, parking zone, lavish clubhouse and children’s
          play area. Welcome to the 3 &amp; 4 BHK flats/apartments at <a href="http://assetzmarq.org/">Assetz Marq</a> 2.0
          that make more room for life’s better moments. <b>Assetz Marq 2.0</b> price is very affordable for every people. <b>Assetz Marq </b> offers private and business
          spaces found in Kannamangala on the Hoskote Whitefield main road,Bangalore that is all around associated with the real streets, social and
          business foundations.These condos have 2 blocks and are offering 3 BHK and 4 BHK private flats alongside the penthouses at reasonable prices.Assetz Marq 2.0 is the forthcoming new pursuit of Assetz Property Group – one of India's driving architects of private and business property. This lavish property is stretched out to 28 areas of the place where there is a rich green scene. It is a novel mix of private, retail and organization spaces. Masterminded in Kannamangala on the Hoskote-Whitefield standard road; It gives its inhabitants smart access to the working environments in Whitefield tech focus point and is in like manner all around related to other genuine avenues, social and business foundations. It is easily situated in Kannamangala, of Whitefield-Hoskote Main Road. Kannamangala is only a community; however, it has a gigantic interest after the development of the Bangalore International Airport, arranged close to this town.
        </p>
        
        </Description>
        <hr/>
        <Overview/>
        <hr/>
        <ConfigurationPart/>
        <hr/>
        <Gallery/>
        <hr/>
        <Costing/>
        <hr/>
        <Amenities/>
        <hr/>
        <ButtonComponent/>
        <hr/>
        <LocationPart/>
          <Footer/>
         
          </div>
          </div>
        </div>
    )
}
