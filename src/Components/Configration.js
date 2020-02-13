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
    <td rowSpan={4} style={{fontSize:"18px", fontWeight:"500"}}>
    <br/>
    <br/>
    Sun And Sanctum</td>
    </tr>
    <tr>
    <td>2 BHk</td>
     <td>1141</td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    </tr>
    <tr>
     <td>3 BHK + 2T </td>
     <td>1354</td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    </tr>
    <tr>
    <td>3 BHK + 3T</td>
    <td>1556</td>
    <td><Modal title="Know More" class="modalbuttonsmall"/></td>
   </tr>
   
   
  </tbody>
</table>
        </div>
    );
};

export default Tabel;