import React from 'react';
import Title from './Title';
import FormComponent from './Form';
import Logo from '../Images/blacklogo.png';
import '../GlobalStyles/styles.css';

const Location = () => {
    return (
        <div className="locationPart">
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Marq Location"/>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.706789175487!2d77.7619875!3d13.0244172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ef127860c74ba1e!2sAssetz%20Marq!5e0!3m2!1sen!2sin!4v1572169508437!5m2!1sen!2sin" width="100%" height="453" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe>
        </div>
        <div>
        <div style={{textAlign:"center"}}>
        <Title title="Leave Us a Message"/>
        </div>
        <div className="aliginingForm">
        <div style={{textAlign:"center"}}>
            <img src={Logo} alt="Assertz" width="150px"/>
          </div>
        <FormComponent/>
        </div>
        </div>
        </div>
    );
};

export default Location;