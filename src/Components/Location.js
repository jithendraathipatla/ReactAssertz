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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.665871574457!2d77.74164545817267!3d12.982535039372218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1e3bb2948afbff4!2sPrestige%20Waterford!5e0!3m2!1sen!2sin!4v1597809900602!5m2!1sen!2sin" width="100%" height="490" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>        </div>
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