import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from './Modal';
import '../GlobalStyles/styles.css';

const Tabel = () => {
    return (
        <div className="tabelmain">
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Auriga Configuration"/>
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
    );
};

export default Tabel;