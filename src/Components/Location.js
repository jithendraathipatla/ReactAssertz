import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import {css} from '@emotion/core';
import ComingSo from '../Imagesa/Images/Coming-Soon-Project-.jpg'

const Location = (props) => {
    const iframedisplay = () => {
        return(
          <iframe
          src={props.iframe}
          frameBorder="0"
          style={{ width: "100%" }}
          height="535px"
          allowFullScreen=""
          title={props.title}
        ></iframe>
        )
      }
      
      const comingSoon = () => {
        return(
          <div  style={{textAlign:"center", marginTop:"75px"}}>
          <img src={ComingSo} alt="coming Soon"/>
          </div>
        )
      }
       return (
        <div css={locationPart}>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title={props.title}/>
        </div>
          {props.iframe === "null" ? comingSoon() : iframedisplay()}
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div css={aliginingForm}>
        <div style={{textAlign:"center"}}>
            <img src={props.logo} alt=" Waterford" width="80%" style={{height:"120px", marginTop:"-12px"}}/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

const locationPart = css`
display: grid;
grid-template-columns: 8fr 4fr;
grid-gap: 10px;
padding-left:10px;
margin-bottom:30px;
`

const aliginingForm = css`
box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);
padding: 20px;
margin-right:10px;
background-size: cover;

`

export default Location;