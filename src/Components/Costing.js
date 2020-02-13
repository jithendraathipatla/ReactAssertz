import React, {useState} from 'react';
import '../GlobalStyles/styles.css';
import Title from './Title';
import CostingImage from '../Images/costing-details.jpg';
import Modal from './Modal';

const Costing = () => {
    const [hoveredText, sethoveredText] = useState(null);

    const handleMouseHover = () => {
      sethoveredText("true");
    }

    const handleMouseHoverTwo = () => {
      sethoveredText(null);
    }


    return (
        <div className="costingPart">
        <div> 
        <div style={{textAlign:"center"}}>
        <Title title="Sun And Sanctum Price"/>
        </div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead >
              <tr className="is-selected" style={{backgroundColor:"rgb(69, 190, 61)", border:"3px solid #eee"}}>
              <th>Project</th>
              <th style={{background:"#056C9F"}}>Configuration</th>
              <th>Unit Carpet (Sq.Ft)</th>
              <th style={{background:"#056C9F"}}>Price</th>
            </tr>
            </thead>
           
            <tbody>
    
            <tr>
            
            <td rowSpan={4}  style={{fontSize:"18px", fontWeight:"500"}}>
            <br/>
            <br/>
            <br/>
            <br/>
            Sun And Sanctum</td>
            </tr>
            <tr>
            <td>2 BHk</td>
             <td>1141</td>
             <td> Rs. 79 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>3 BHK + 2T </td>
             <td>1354</td>
             <td> Rs.85 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>3 BHK + 3T </td>
             <td>1356</td>
             <td> Rs.1.06 Crore* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
             
           
            
          </tbody>
          </table>
            </div>
            <div>
            <div style={{textAlign:"center"}}>
            <Title title="Sun And Sanctum Price"/>
            </div>
           
            <div  onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverTwo} className="parkedtwo">
            <img src={CostingImage}  alt="costing Details" style={{height:"223px", width:"100%"}}/>
            <div className={hoveredText === null ? "parkedone" : "parked"}>
            <Modal title="Know More"  class="modalbuttonsmall"/>
            </div>
            </div>
            <br/>
            <div style={{textAlign:"center"}} id="finalcosting">
            <Modal title="Complecte Costing" class="modalbuttonsmall" />
            </div>
            </div>
        </div>
        
    );
};

export default Costing;