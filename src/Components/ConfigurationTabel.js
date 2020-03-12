import React from 'react';
import Title from '../Components/Title';
import {css} from "@emotion/core";

const ConfigurationTabel = (props) => {
    const displayingTabelBody = () => {
       return props.tabelone.map((item,i)=>{
           return (
               <div key={i} css={body}>
                    <span>{item.bed}</span>
                    <span>{item.feet}  Sq.ft</span>
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
                 <div>Unit Type</div>
                 <div>Area in Sq.ft</div>
               </div>
               <div>
                  {displayingTabelBody()}
               </div>
            </div>

        </div>
    );
};

const Tabel = css`
display:block;
margin:0px 40px 40px;
margin-top:0px;
`

const Tabelhead= css`
 display:grid;
  text-align:center;
  grid-template-columns: 6fr 6fr;
 background:#a88944;
 color:white;
 div{
     border:3px solid #242424;
     box-shadow:0px 0px 10px 2px solid rgba(0,0,0,0.5);
     padding:10px 0px;
 }
`

const body= css`
  display:flex;
  text-align:center;
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

export default ConfigurationTabel;