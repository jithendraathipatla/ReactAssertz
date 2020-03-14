import React from 'react';
import {css} from '@emotion/core';
import costsheetImage from '../Imagesa/Images/costing-details.jpg';
import Title from '../Components/Title';

const Pricingcomponent = (props) => {
    const displayingTabelBody = () => {
        return props.tabeltwo.map((item,i)=>{
            return (
                <div key={i} css={body}>
                     <span>{item.bed}</span>
                     <span>{item.feet}  Sq.ft</span>
                     <span>{item.price} Lacs</span>
                     <span>Know More</span>
                </div>
            )
        })
     }
     return (
         <div>
             <div style={{textAlign:"center"}}>
             <Title title={props.project}/>
             </div>
             <div css={Tabel}>
                <div css={Tabelhead}>
                  <div css={Tabelheadone}>
                  <div>Unit Type</div>
                  <div>Area in Sq.ft</div>
                  <div>Approximate Price</div>
                  <div>Discounted Price</div>
                  </div>
                 <div>
                  {displayingTabelBody()}
                 </div>
                </div>
                <div css={imagestyle}>
                 <img src={costsheetImage} alt="cost sheet"/>
                </div>
             </div>
 
         </div>
     );
 };
 
 const Tabel = css`
 margin:0px 40px 40px;
 margin-top:0px;
 display:flex;
 `
 
 const Tabelhead= css`
   flex:12;
   display:block;
   text-align:center;
   color:white;
 `

 const Tabelheadone = css`
  display:grid;
  grid-template-columns:3fr 3fr 3fr 3fr;
   div{
    border: 3px solid #242424;
    box-shadow: 0px 0px 10px 2px solid rgba(0,0,0,0.5);
    padding: 10px 0px;
    color:black;
    background:#a88944;
    :nth-child(4){
        background:green;
        font-weight:500;
        color:white;
    }
   }
 `
 
 const body= css`
   display:flex;
   text-align:center;
   color:black;
   span{
       flex:6;
       border:0.1px solid #242424;
       padding:8px;
   }
   :hover span{
     cursor:pointer;
     background:#eeee;
   }
   :nth-child(odd) span{
       background:#eeee
   }
 `

 const imagestyle = css`
  flex:2;
  padding-left:20px;
  img{
   width:370px;
  }
 `

 export default Pricingcomponent;