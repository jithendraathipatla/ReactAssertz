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
            
            <td rowSpan={7}  style={{fontSize:"18px", fontWeight:"500"}}>
            <br/>
            <br/>
            <br/>
            <br/>
            Sun And Sanctum</td>
            </tr>
            <tr>
            <td>2 BHk</td>
             <td>1150</td>
             <td> Rs. 80 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>2 BHK </td>
             <td>1250</td>
             <td> Rs.85 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
            <tr>
             <td>3 BHK </td>
             <td>1300</td>
             <td> Rs.88 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
             
            <tr>
             <td>3 BHK </td>
             <td>1400</td>
             <td> Rs.95 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>

            <tr>
             <td>3 BHK </td>
             <td>1600</td>
             <td> Rs.110 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
            </tr>
        
            <tr>
             <td>2 BHK </td>
             <td>1700</td>
             <td> Rs.115 Lakh* <br/><Modal title="Know More" class="modalbuttonsmall"/></td>
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