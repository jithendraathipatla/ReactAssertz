import React from 'react';
import Modal from '../Components/Modal';
import { FaRegDotCircle } from 'react-icons/fa';


const HighlightFormTwo = () => {
    return (
        <div className="carousel-captiona">
          <h1>Aspire Aurum Highlights</h1>
          <br/>
          <div>
           <ul>
            <li><FaRegDotCircle/> More than Half open Spaces</li>
            <li><FaRegDotCircle/> Energy Efficient Smart Homes</li>
            <li><FaRegDotCircle/> Carbon-Healing Homes</li>
            <li><FaRegDotCircle/> Water Recycling</li>
            <li><FaRegDotCircle/> Ground Water Recharge</li>
           </ul>
           </div>
            <div style={{border:"1px solid white", textAlign:"center"}} className="rera">
             <h5 style={{textAlign:"center", color:"white"}}>RERA No:</h5>
             <h6>PRM/KA/RERA/1251/446 /PR/200123/003229</h6>
            </div>
             <br/>
             <div style={{textAlign:"left"}} class="form-button">
             <Modal title="Contact Us"  class="buttona"/>
             </div>
        </div>
    );
};

export default HighlightFormTwo;







































