import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from './Modal';
import '../GlobalStyles/styles.css';

const Tabel = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Sun And Sanctum Configuration"/>
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
    <td rowSpan={3} style={{fontSize:"18px", fontWeight:"500"}}>
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
    <td rowSpan={5} style={{fontSize:"18px", fontWeight:"500"}}>
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
    );
};

export default Tabel;