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
            <td rowSpan={3}  style={{fontSize:"18px", fontWeight:"500"}}>
            Hyde</td>
            </tr>
            <tr>
            <td>1 BHk</td>
             <td>632 - 652</td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>2 BHK </td>
             <td>995 - 999</td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
             
        
            <tr>
            <td rowSpan={5}  style={{fontSize:"18px", fontWeight:"500"}}>
            <br/>Regent</td>
            </tr>
            <tr>
            <td>1 BHk Large</td>
             <td>862</td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>2 BHK</td>
             <td>1054 - 1173</td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>3 BHk + 2T</td>
             <td>1244 - 1277</td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr> 
            <tr>
            <td>3 BHk + 3T</td>
            <td>1431 - 1562</td>
            <td><Modal title="Know More" class="modalbuttonsmall"/></td>
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