import React,{useState} from 'react';
import {Link} from 'gatsby'
import './NavBar.css';
import MainLogo from '../Images/logo.png';
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
      console.log(state),
        <div>
           <nav className="navbar">
           <div className="nav-center">
              <div className="nav-header">
                 <Link to="/">
                    <img src={MainLogo} alt="Assertz Marq" className="main_logo1"/>
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
               <li onClick={closingNav}><Link to="/location">Location</Link></li>
              </ul>   
           </div>
           
           </nav>
           </div>
      
      );
  };
  

export default NavBar;