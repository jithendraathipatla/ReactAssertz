import React from 'react';

const HighlightFormTwo = (props) => {
    return (
        <div className="carousel-captiona">
        <span style={{backgroundColor: "#d4af37",
        background: "linear-gradient(-45deg, #826424, #d4af37 ,#826424,#d4af37)",
        backgroundSize: "400% 400%",
        webkitAnimation: "Gradient 3s ease infinite",
        mozAnimation: "Gradient 3s ease infinite",
        animation: "Gradient 3s ease infinite", color:"#fff", padding: "2px", width:"25%", display: "block" ,margin: "5px 0", fontSize: "20px"}} className="prewidth"> 
            <span style={{display: "block", fontSize: "1.1rem"}}>
            <span className="animated bounceIn infinite" style={{display: "block", animationDuration: "3s"}}>{props.first}</span>
         </span></span>
           <h2>{props.second}</h2>
              <br/>
            <h4>{props.third} Bangalore</h4>
            <h4>Exclusive Homes {props.third} Bangalore</h4>
            <br/>
            <span style={{backgroundColor: "#d4af37",
            background: "linear-gradient(-45deg, #826424, #d4af37 ,#826424,#d4af37)",
            backgroundSize: "400% 400%",
            webkitAnimation: "Gradient 3s ease infinite",
            mozAnimation: "Gradient 3s ease infinite",
            animation: "Gradient 3s ease infinite", color:"#fff", padding: "5px",textAlign:"center" ,display: "block",margin: "5px 0"}}>
                 <span style={{display: "block", fontSize: "1.5rem", letterSpacing:"3px"}} className="highlightree">
                 <span className="animated bounceIn infinite" style={{display: "block", animationDuration:"3s"}}>{props.fourth}</span>
                 <span className="animated_sub" style={{display: "block"}}>{props.seventh}</span>
             </span></span>
             <br/>
             <h3>Luxury {props.five} {props.eight} &amp; {props.nine} BHK Apartments</h3>
            <h3>₹ {props.sixth} Lacs Onwards </h3>

            
        </div>
    );
};

export default HighlightFormTwo;







































