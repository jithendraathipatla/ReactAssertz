import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from './Modal';
import '../GlobalStyles/styles.css';

const Tabel = () => {
    return (
        <div className="configurationimage">
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Finsbury Park Configuration"/>
            </div>
          
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead >
    <tr className="is-selected" style={{backgroundColor:"#a88944", border:"3px solid #eee"}}>
      <th>Project</th>
      <th style={{background:"#ceaf69"}}>Configuration</th>
      <th>Unit Carpet (Sq.Ft)</th>
      <th style={{background:"#ceaf69"}}>Price</th>
    </tr>
  </thead>
 
  <tbody>
    
    <tr>
    <td rowSpan={3}>
    <br/>Hyde</td>
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
    <td rowSpan={5}>
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