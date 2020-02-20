import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import Logo from '../Imagesa/Images/logoa.jpg';
import '../GlobalStyles/styles.css';

const Location = () => {
    return (
        <div className="locationPart">
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Aspire Aurum Location"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.447705900164!2d77.7503337!3d13.0285438!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x375c021cf2d33f81!2sSumadhura%20Aspire%20Aurum!5e0!3m2!1sen!2sin!4v1582176539763!5m2!1sen!2sin" width="100%" height="470" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div className="aliginingForm">
        <div style={{textAlign:"center"}}>
            <img src={Logo} alt="Aspire Aurum" width="100px"/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

export default Location;