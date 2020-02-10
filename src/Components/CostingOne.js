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
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead >
              <tr className="is-selected" style={{backgroundColor:"rgb(168, 137, 68)", border:"3px solid #eee"}}>
                <th>Unit Type</th>
                <th>Unit Carpet Area(Sq.Ft)</th>
                <th>Price</th>
              </tr>
            </thead>
           
            <tbody>
              <tr>
              <td>1 BHk Large</td>
               <td>862</td>
               <td><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
              </tr>
              <tr>
               <td>2 BHK</td>
               <td>1054 - 1173</td>
               <td><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
              </tr>
              <tr>
               <td>3 BHk + 2T</td>
               <td>1224 - 1277</td>
               <td><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
              </tr>

              <tr>
              <td>3 BHk + 3T</td>
              <td>1431 - 1562</td>
              <td><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
             </tr>
              
            </tbody>
          </table>
            </div>

            <div  onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverTwo} className="parkedtwo">
            <img src={CostingImage}  alt="costing Details" style={{height:"223px", width:"100%"}}/>
            <div className={hoveredText === null ? "parkedone" : "parked"}>
            <Modal title="Know More"  class="modalbuttonsmall"/>
            </div>
            </div>
            <br/>
            <div style={{textAlign:"center"}}>
            <Modal title="Complecte Costing" class="modalbuttonsmall"/>
            </div>
           
        </div>
    );
};

export default Costing;