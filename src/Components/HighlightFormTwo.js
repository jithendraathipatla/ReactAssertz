import React from 'react';
import Modal from '../Components/Modal';


const HighlightFormTwo = () => {
    return (
        <div className="carousel-captiona">
        <span style={{backgroundColor: "#056C9F",
        background: "linear-gradient(-45deg, rgb(69, 190, 61), #056C9F ,rgb(69, 190, 61),#056C9F)",
        backgroundSize: "400% 400%",
        webkitAnimation: "Gradient 3s ease infinite",
        mozAnimation: "Gradient 3s ease infinite",
        animation: "Gradient 3s ease infinite", color:"#fff", padding: "2px", width:"23.1%", display: "block" ,margin: "5px 0", fontSize: "20px"}} className="prewidth"> 
            <span style={{display: "block", fontSize: "1.1rem"}}>
             <span class="animated bounceIn infinite" style={{display: "block", animationDuration: "3s"}}>PRE-LAUNCH</span>
         </span></span>
          <h1>Assetz Sun And Sanctum</h1>
            <h4>TC Palya, Old Madras Road, Bangalore</h4>
            <h4>Exclusive Homes In Old Madras Road, Bangalore</h4>
            <span style={{backgroundColor: "#056C9F",
            background: "linear-gradient(-45deg, rgb(69, 190, 61), #056C9F ,rgb(69, 190, 61),#056C9F)",
            backgroundSize: "400% 400%",
            webkitAnimation: "Gradient 3s ease infinite",
            mozAnimation: "Gradient 3s ease infinite",
            animation: "Gradient 3s ease infinite", color:"#fff", padding: "5px",textAlign:"center" ,display: "block",margin: "5px 0"}}>
                        <span style={{display: "block", fontSize: "1.5rem", letterSpacing:"3px"}} className="highlightree">
                 <span className="animated bounceIn infinite" style={{display: "block", animationDuration:"3s"}}>Hurry! Only 1% GST</span>
                 <span className="animated_sub" style={{display: "block"}}>PMAY benefits</span>
             </span></span>
             <h3>Luxury 2 &amp; 3 BHK Apartments</h3>
            <h3>₹ 79 Lacs Onwards </h3>
            <div style={{border:"1px solid white", textAlign:"center"}} className="rera">
             <h5 style={{textAlign:"center", color:"white"}}>RERA No:</h5>
             <h6>ACK/KA/RERA/1251/446/PR/200120/003839</h6>
            </div>
             <br/>
             <div style={{textAlign:"center"}}>
             <Modal title="Price BreakUp"  class="Assetzcopy"/>
             </div>
        </div>
    );
};

export default HighlightFormTwo;







































