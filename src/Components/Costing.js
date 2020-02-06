import React from 'react';
import '../GlobalStyles/styles.css';
import Title from './Title';
import CostingImage from '../Images/costing-details.jpg';
import Modal from './Modal';

const Costing = () => {
    return (
        <div>
        <div className="costingPart">
            <div>
            <div  style={{textAlign:"center"}}>
            <Title title="Marq Pricing" />
            </div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead >
              <tr className="is-selected" style={{backgroundColor:"rgb(88, 108, 138)", border:"3px solid #eee"}}>
                <th>Unit Type</th>
                <th>Unit Carpet Area(Sq.Ft)</th>
                <th>Price</th>
              </tr>
            </thead>
           
            <tbody>
              <tr>
              <td>3 BHk + 2 T</td>
               <td>1366 - 144</td>
               <td>Starting 90 Lakh* <br/><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
              </tr>
              <tr>
               <td>3 BHK + 3 T</td>
               <td>1564 - 1939</td>
               <td>Starting 1.04 Cr* <br/><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
              </tr>
              <tr>
               <td>4 BHk + 4T</td>
               <td>2232 - 1266</td>
               <td>Starting 1.40 Cr* <br/><Modal title="Price Breakup" class="modalbuttonsmall"/></td>
              </tr>
              
            </tbody>
          </table>
            </div>

            <div>
            <div  style={{textAlign:"center"}}>
            <Title title="Marq CostSheet" />
            </div>
            <img src={CostingImage} alt="costing Details" style={{height:"223px", width:"100%"}}/>
            <br/>
            <div style={{textAlign:"center"}}>
            <Modal title="Complecte Costing" class="modalbuttonsmall"/>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Costing;