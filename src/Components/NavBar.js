import React from 'react';
import {Link} from 'gatsby'
import './NavBar.css';
import MainLogo from '../Images/logo.png';

const NavBar = () => {
    return (
        <div className="navbar_main">
           <div className="logo">
             <img src={MainLogo} alt="Main Logo"/>
           </div>

           <div className="navbar_links">
           
             <div><Link to="/">Home</Link></div>
              <div><Link to="/overview">Overview</Link></div>
              <div><Link to="/configuration">Configuration</Link></div>
             <div><Link to="/gallery">Gallery</Link></div>
              <div><Link to="/masterplan">MasterPlan</Link></div>
            <div><Link to="/pricing">Pricing</Link></div>
              <div><Link to="/amenities">Amenities</Link></div>
              <div><Link to="/location">Location</Link></div>
            
           </div>
        </div>
    );
};

export default NavBar;