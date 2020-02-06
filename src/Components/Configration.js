import React from 'react';
import TitleComponent from '../Components/Title';
import Modal from './Modal';
import '../GlobalStyles/styles.css';

const Tabel = () => {
    return (
        <div>
            <div style={{textAlign:"center"}}>
            <TitleComponent title="Marq Configuration"/>
            </div>
          
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
  <thead >
    <tr className="is-selected" style={{backgroundColor:"rgb(88, 108, 138)", border:"3px solid #eee"}}>
      <th>Project</th>
      <th>Configuration</th>
      <th>Unit Carpet (Sq.Ft)</th>
      <th>Price</th>
    </tr>
  </thead>
 
  <tbody>
    
    <tr>
    <td rowSpan={4}>
    <br/>Phase II</td>
    </tr>
    <tr>
    <td>3 BHk + 2 T</td>
     <td>1366 - 1424</td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    </tr>
    <tr>
     <td>3 BHK + 3 T</td>
     <td>1564 - 1939</td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    </tr>
    <tr>
     <td>4 BHk + 4T</td>
     <td>2232 - 2266</td>
     <td><Modal title="Know More" class="modalbuttonsmall"/></td>
    
    </tr> 
  </tbody>
</table>
        </div>
    );
};

export default Tabel;