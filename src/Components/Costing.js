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
        <Title title="Auriga Price"/>
        </div>
        <table className="configurationtabel">
        <thead className="tabelhead">
          <tr>
            <th>Project</th>
            <th>Configuration</th>
            <th>Unit Carpet (Sq.Ft)</th>
            <th>Price</th>
          </tr>
        </thead>
       
        <tbody className="tabelbody">
          <tr>
          <td rowSpan={5} style={{fontSize:"18px", fontWeight:"500"}}>Concorde</td>
          </tr>
          <tr>
          <td>1.5 BHk + 1T</td>
           <td>833 - 837</td>
           <td><Modal title="Know More" class="modalbuttonsmall"/></td>
          </tr>
          <tr>
           <td>2 BHK + 2T</td>
           <td>1074 - 1163</td>
           <td><Modal title="Know More" class="modalbuttonsmall"/></td>
          </tr>
          <tr>
           <td>2.5 BHk + 2T</td>
           <td>1311 - 1370</td>
           <td><Modal title="Know More" class="modalbuttonsmall"/></td>
          </tr> 
          <tr>
          <td>3 BHk + 3T</td>
          <td>1744 - 1801</td>
          <td><Modal title="Know More" class="modalbuttonsmall"/></td>
         </tr> 
      
        </tbody>
      </table>
           
            </div>
            <div>
            <div style={{textAlign:"center"}}>
            <Title title="Auriga Price"/>
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