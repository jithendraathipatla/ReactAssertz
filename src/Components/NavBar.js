import React,{useState} from 'react';
import {Link} from 'gatsby'
import '../GlobalStyles/styles.css';
import Logo from '../Imagesa/Images/logo.png';
import HomeSVG from '../Imagesa/Images/svg/home.svg';
import LoaderSVG from '../Imagesa/Images/svg/loader.svg';
import ReadingSVG from '../Imagesa/Images/svg/reading-library-2.svg';
import SiteVisitSVG from '../Imagesa/Images/svg/site-visit.svg';
import PriceSVG from '../Imagesa/Images/svg/price.svg';
import AmenitiesSVG from '../Imagesa/Images/svg/amenities.svg';
import LocationSVG from '../Imagesa/Images/svg/location.svg';
import { FaAlignRight } from "react-icons/fa";


const NavBar = () => {
  const [state, setstate] = useState(false);
     const handelToogle = () => {
      {state === false ? setstate(true) : setstate(false)}
     }
     const closingNav = () =>{
        setstate(false);
     }
    return (
     
        <div>
           <nav className="navbar" style={{backgroundColor:"white"}}>
           <div className="nav-center">
              <div className="nav-header">
                 <Link to="/">
                    <img src={Logo} alt="Finsbury Park" className="main_logo1"/>
                 </Link>
              <button type="button" className="nav-btn" onClick={handelToogle}>
                <FaAlignRight className="nav-icon"/>
              </button>
              </div>
              <ul className={state === true ? "nav-links show-nav" : "nav-links"}>
              <li onClick={closingNav}><Link to="/">Home</Link></li>
               <li onClick={closingNav}><Link to="/overview">Overview</Link></li>
              <li onClick={closingNav}><Link to="/configuration">Configuration</Link></li>
              <li onClick={closingNav}><Link to="/gallery">Gallery</Link></li>
               <li onClick={closingNav}><Link to="/masterplan">Master Plan</Link></li>
               <li onClick={closingNav}><Link to="/pricing">Pricing</Link></li>
               <li onClick={closingNav}><Link to="/amenities">Amenities</Link></li>
              <li onClick={closingNav} className="LastChild"><Link to="/location">Location</Link></li>
              </ul>   
           </div>
           
           </nav>
           </div>
      
      );
  };
  

export default NavBar;