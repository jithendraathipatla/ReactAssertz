import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import Logo from '../Imagesa/Images/logo.png';
import '../GlobalStyles/styles.css';
import ComingSoon from '../Imagesa/Images/Coming-Soon-Project-.jpg'

const Location = () => {
    return (
        <div className="locationPart">
        <div>
        <div style={{textAlign:"center"}}>
        <Title title=" Waterford Location"/>
        </div>
        <img src={ComingSoon} width="100%" frameborder="0" style={{border:"0"}} allowfullscreen=""/>
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div className="aliginingForm">
        <div style={{textAlign:"center"}}>
            <img src={Logo} alt=" Waterford" width="26%" style={{ height:"100px"}}/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

export default Location;