import React from 'react';
import Modal from '../Components/Modal';


const HighlightFormTwo = () => {
    return (
        <div className="carousel-captiona">
        <span style={{backgroundColor: "#d4af37",
        background: "linear-gradient(-45deg, #826424, #d4af37 ,#826424,#d4af37)",
        backgroundSize: "400% 400%",
        webkitAnimation: "Gradient 3s ease infinite",
        mozAnimation: "Gradient 3s ease infinite",
        animation: "Gradient 3s ease infinite", color:"#fff", padding: "2px", width:"23.1%", display: "block" ,margin: "5px 0", fontSize: "20px"}} className="prewidth"> 
            <span style={{display: "block", fontSize: "1.1rem"}}>
             <span class="animated bounceIn infinite" style={{display: "block", animationDuration: "3s"}}>PRE-LAUNCH</span>
         </span></span>
          <h1>Prestige Finsbury Park</h1>
            <h4>KIADB, Bagalur Road, Bangalore</h4>
            <h4>Exclusive Homes In Bagalur, Bangalore</h4>
            <span style={{backgroundColor: "#d4af37",
            background: "linear-gradient(-45deg, #826424, #d4af37 ,#826424,#d4af37)",
            backgroundSize: "400% 400%",
            webkitAnimation: "Gradient 3s ease infinite",
            mozAnimation: "Gradient 3s ease infinite",
            animation: "Gradient 3s ease infinite", color:"#fff", padding: "5px",textAlign:"center" ,display: "block",margin: "5px 0"}}>
                        <span style={{display: "block", fontSize: "1.5rem", letterSpacing:"3px"}}>
                 <span className="animated bounceIn infinite" style={{display: "block", animationDuration:"3s"}}>Hurry! Only 1% GST</span>
                 <span className="animated_sub" style={{display: "block"}}>PMAY benefits</span>
             </span></span>
             <h3>Luxury 1,2 &amp; 3 BHK Apartments</h3>
            <h3>₹ 33.5 Lacs Onwards </h3>

            <div style={{border:"1px solid white", textAlign:"center"}} className="rera">
             <h5 style={{textAlign:"center", color:"white"}}>RERA No:</h5>
             <h6>Hyde:PRM/KA/RERA/1251/472/PR/191206/003055</h6>
            <h6>Regent:PRM/KA/RERA/1251/472/PR/191206/003056 </h6>
            </div>
             <br/>
             <div style={{textAlign:"center"}}>
             <Modal title="Price BreakUp"  class="prestigecopy"/>
             </div>
        </div>
    );
};

export default HighlightFormTwo;







































