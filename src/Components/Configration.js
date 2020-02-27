import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from './Modal';
import '../GlobalStyles/styles.css';

const Tabel = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title=" Waterford Configuration"/>
            </div>
          
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead >
    <tr className="is-selected" style={{backgroundColor:"#a88944", border:"3px solid #eee"}}>
      <th>Project</th>
      <th style={{background:"black"}}>Configuration</th>
      <th>Unit Carpet (Sq.Ft)</th>
      <th style={{background:"black"}}>Price</th>
    </tr>
  </thead>
 
  <tbody>
    
    <tr>
    <td rowSpan={4} style={{fontSize:"18px", fontWeight:"500"}}>
    <div style={{height:"12px"}}></div>
    Waterford</td>
    </tr>
    <tr>
     <td>3 BHK </td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    </tr>
    <tr>
    <td>4 BHk</td>
    <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    <td><Modal title="Know More" class="modalbuttonsmall"/></td>
   </tr>
     

    
  </tbody>
</table>
        </div>
    );
};

export default Tabel;