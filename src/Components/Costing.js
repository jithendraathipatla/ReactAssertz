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
        <Title title=" Waterford Price"/>
        </div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead >
              <tr className="is-selected" style={{backgroundColor:"rgb(168, 137, 68)", border:"3px solid #eee"}}>
              <th>Project</th>
              <th style={{background:"black"}}>Configuration</th>
              <th>Unit Carpet (Sq.Ft)</th>
              <th style={{background:"black"}}>Price</th>
            </tr>
            </thead>
           
            <tbody>
    
            <tr>
            <td rowSpan={6} style={{fontSize:"18px", fontWeight:"500"}}>
            <br/>
            <br/>
            Waterford</td>
            </tr>
            <tr>
            <td>1 BHk</td>
            <td><Modal title="Know More" class="modalbuttonsmall"/></td>
                 <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
            <td>2 BHk</td>
            <td><Modal title="Know More" class="modalbuttonsmall"/></td>
                 <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
            <td>3 BHk Small</td>
            <td><Modal title="Know More" class="modalbuttonsmall"/></td>
                 <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
            <td>3 BHk Large</td>
            <td><Modal title="Know More" class="modalbuttonsmall"/></td>
                 <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>4 BHK </td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
             <td><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            
          </tbody>
          </table>
            </div>
            <div>
            <div style={{textAlign:"center"}}>
            <Title title=" Waterford Price"/>
            </div>
           
            <div  onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverTwo} className="parkedtwo">
            <img src={CostingImage}  alt="costing Details" style={{height:"223px", width:"100%"}} alt="..."/>
            <div className={hoveredText === null ? "parkedone" : "parked"}>
            <Modal title="Know More"  class="modalbuttonsmall"/>
            </div>
            </div>
            <br/>
            <div style={{textAlign:"center"}} id="finalcosting">
            <Modal title="Complete Costing" class="modalbuttonsmall" />
            </div>
            </div>
        </div>
        
    );
};

export default Costing;