import React from 'react';
import Button from './Button';


export default function SimpleCard(props) {
 
  return (
    <div className="card" style={{padding:"40px"}}>
     {props.bhk}
     <br/>
     <br/>
     <Button name="Know More"/>
    </div>
   
  );
}
