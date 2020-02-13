import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import Logo from '../Imagesa/Images/logo.svg';
import '../GlobalStyles/styles.css';

const Location = () => {
    return (
        <div className="locationPart">
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Sun And Sanctum Location"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62198.46177647309!2d77.64789630625457!3d13.009934252582976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11497ecf6bf9%3A0x8e1344a990a20e4e!2sAssetz%20Sun%20%26%20Sanctum!5e0!3m2!1sen!2sin!4v1581592216120!5m2!1sen!2sin" width="100%" height="470" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div className="aliginingForm">
        <div style={{textAlign:"center"}}>
            <img src={Logo} alt="Sun And Sanctum" width="200px"/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

export default Location;